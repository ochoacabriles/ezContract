// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed
// set the provider you want from Web3.providers
/*window.web3 = new Web3(window.web3 
    ? window.web3.currentProvider
    : new Web3.providers.HttpProvider("https://ropsten.infura.io/PLYBbzr9GHtjF1vnKqkg "))
*/
window.web3 = new Web3(window.web3.currentProvider)
// Add smooth scrolling on all links inside the navbar
function getABI(){
    var tokenAbi = JSON.parse(document.getElementById('tokenAbi').innerHTML)
    var tokenByteCode = document.getElementById('tokenBC').innerHTML
    var crowdsaleAbi = JSON.parse(document.getElementById('crowdsaleAbi').innerHTML)
    var crowdsaleByteCode = document.getElementById('crowdsaleBC').innerHTML
    var tokenContract = web3.eth.contract(tokenAbi)
    var crowdsaleContract = web3.eth.contract(crowdsaleAbi)
    deployCrowdsale(tokenContract, tokenByteCode, crowdsaleContract, crowdsaleByteCode)
}

async function deployCrowdsale(token, tokenByteCode, crowdsale, crowdsaleByteCode){

    var tokenName = document.getElementById('tokenName').innerHTML != ""
        ? document.getElementById('tokenName').innerHTML
        : 'myToken'
    var tokenSymbol = document.getElementById('tokenSymbol').innerHTML != ""
        ? document.getElementById('tokenSymbol').innerHTML
        : 'MT'
    var tokenDecimals = document.getElementById('tokenDecimals').innerHTML != ""
        ? Number(document.getElementById('tokenDecimals').innerHTML)
        : 18
    var tokenSupply = document.getElementById('tokenSupply').innerHTML != ""
        ? web3.toWei(Number(document.getElementById('tokenSupply')), 'ether')
        : 100e+18
    var crowdsaleRate = document.getElementById('crowdsaleRate').innerHTML != ""
        ? Number(document.getElementById('crowdsaleRate'))
        : 1
    var tokenGas = await web3.eth.estimateGas({data: tokenByteCode}, (err, tokenGas) => {
        if (err) console.log(err)
        if (!err) console.log({tokenGas})
    })
    /*var crowdsaleGas = await web3.eth.estimateGas({data: crowdsaleByteCode}, (err, crowdsaleGas) => {
        if (err) console.log(err)
        if (!err) console.log({crowdsaleGas})
    })*/
    window.alert('Confirma la transacción en metamask para desplegar el contrato del token')
    token.new(tokenName, tokenSymbol, tokenDecimals, tokenSupply, 
    {
        from: web3.eth.accounts[0], 
        data: tokenByteCode,
        gas: tokenGas
    }, 
    (err, tokenInstance) => {
        if (err) {
            console.log(err)
            window.alert('Ocurrió un error al desplegar el contrato del token')
        }
        if (!err) {
            if (!tokenInstance.address) {
                console.log(tokenInstance)
                console.log('Aún no hay dirección')
            }
            if (tokenInstance.address) {
                console.log(tokenInstance)
                console.log('Ya hay dirección')
                window.alert('Confirma la transacción en metamask para desplegar el contrato de crowdsale')
                crowdsale.new(crowdsaleRate, web3.eth.accounts[0], tokenInstance.address,
                {
                    from: web3.eth.accounts[0],
                    data: crowdsaleByteCode,
                    gas: 6500000
                },
                (err, crowdsaleInstance) => {
                    if (err) {
                        console.log(err)
                        window.alert('Ocurrió un error al despegar el contrato de crowdsale')
                    }
                    if (!err) {
                        if (!crowdsaleInstance.address) {
                            console.log(crowdsaleInstance)
                            console.log('Aún no hay dirección')
                        }
                        if (crowdsaleInstance.address) {
                            console.log(crowdsaleInstance)
                            console.log('Ya hay dirección')
                            window.alert('Confirma la transacción en metamask para transferir los tokens al contrato')
                            tokenInstance.transfer(web3.toBigNumber(crowdsaleInstance.address), tokenSupply, {from: web3.eth.accounts[0]}, (err, result) => {
                                if (err) console.log(err.message)
                                if (!err) {
                                    console.log('Tokens transferidos', result)
                                    tokenInstance.balanceOf(crowdsaleInstance.address, (err, result) => {
                                        if (err) {
                                            console.log(err)
                                            window.alert('Ocurrió un error al transferir los tokens al contrato')
                                        }
                                        if (!err) {
                                            console.log('Balance del contrato:', web3.fromWei(result.toNumber(), 'ether'))
                                            window.alert('Tu contrato de ICO se ha desplegado exitosamente. Toma nota de las direcciones:' +
                                                '\n- Token ERC20: ' + tokenInstance.address + 
                                                '\n- Crowdsale: ' + crowdsaleInstance.address + 
                                                '\n\nGracias por usar nuestro servicio')
                                        }
                                    })
                                }
                            })
                        }

                    }
                })
            }
        }
    })
}

$("#navbar a").on('click', function(event) {
  
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
  
      // Prevent default anchor click behavior
      event.preventDefault();
  
      // Store hash
      var hash = this.hash;
  
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
  
      // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
  
    } // End if
  
  });