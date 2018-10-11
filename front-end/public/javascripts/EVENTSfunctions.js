// set the provider you want from Web3.providers
window.web3 = new Web3(window.web3 
    ? window.web3.currentProvider
//    : new Web3.providers.HttpProvider("https://ropsten.infura.io/PLYBbzr9GHtjF1vnKqkg "))
    : new Web3.providers.HttpProvider('http://127.0.0.1:7545'))
const ABI = [{"constant":true,"inputs":[{"name":"_interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"InterfaceId_ERC165","outputs":[{"name":"","type":"bytes4"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"exists","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_caps","type":"uint256[]"},{"name":"_rates","type":"uint256[]"},{"name":"_maxPerSale","type":"uint8"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"quantity","type":"uint256"},{"indexed":false,"name":"tokenType","type":"uint256"},{"indexed":false,"name":"owner","type":"address"}],"name":"saleTokenSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":true,"name":"_tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_approved","type":"address"},{"indexed":true,"name":"_tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_operator","type":"address"},{"indexed":false,"name":"_approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"constant":false,"inputs":[{"name":"_tokenType","type":"uint256"},{"name":"_quantity","type":"uint256"}],"name":"saleToken","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenType","type":"uint256"},{"name":"_quantity","type":"uint256"},{"name":"_to","type":"address"}],"name":"courtesyToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenType","type":"uint256"}],"name":"checkRates","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"checkMaxPerSale","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"checkMaxTokenTypes","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"checkTokenType","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"}],"name":"checkOwnedTokens","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"}]
const contractAddress = '0x6e7cd28ae82bb9f88c5ad90742abf93245db4d9b'

var contractInstance = web3.eth.contract(ABI).at(contractAddress)

var counter = 0
var transferEvent = contractInstance.saleTokenSuccess({ owner: web3.eth.accounts[0]}, (error, result) =>{
    if (error) {
        console.log(error)
    }
    else {
        console.log(result.args)
        window.alert('Emitido!' + result.args.quantity.toString(10))
        counter ++
    }
})

function saleToken(){
    var values = document.getElementById('form')
    var quantity = web3.toBigNumber(values.elements[1].value)
    var tokenType = web3.toBigNumber(values.elements[0].value)
    contractInstance.checkRates(tokenType, (err, rate) => {
        if (err) {
            window.alert(err.message)
            return
        };
        var _value = web3.toBigNumber(web3.toBigNumber(rate) * quantity)
        var transactionObject = {
            'gas': 6500000,
            'from': web3.eth.accounts[0],
            'value': _value
        }
        window.alert('Confirma la transacción en Metamask si estás de acuerdo\n- Cantidad de entradas: ' 
            + quantity + '\n- Localidad: ' + tokenType + '\n- Monto: ' + web3.fromWei(_value, 'ether') + ' ETH')
        contractInstance.saleToken(tokenType, quantity, transactionObject, (err, transactionHash) => {
            if (err) window.alert(err.message)
            window.alert('aquí' + transactionHash)
        })
    })
}

function myTokens(){
    contractInstance.checkOwnedTokens(web3.eth.accounts[0], function(err, ids){
        var types = []
        var headers = ['ID', 'Localidad']
        if (err) {
            window.alert(err.message)
            return
        };
        if(ids.length == 0) {
            var item = document.createElement('P')
            item.setAttribute('id', 'item')
            var text = 'No has comprado ninguna entrada'
            item.appendChild(document.createTextNode(text))
            if(document.getElementById('oldTable')) {
                document.getElementById('listado').replaceChild(item, document.getElementById('oldTable'))
            } else if (document.getElementById('item')) {
                document.getElementById('listado').replaceChild(item, document.getElementById('item'))
            } else {
                document.getElementById('listado').appendChild(item)
            }
        }
        ids.forEach((id) => {
            contractInstance.checkTokenType(id, function(err, type){
                types.push(type)
                if (types.length == ids.length) {
                    makeTable(headers, ids, types)
                }
            })
        })
    })
}

function makeTable(headers, ids, types) {
    var table = document.createElement('TABLE')
    table.setAttribute('id', 'oldTable')
    headers.forEach((header) => {
        var headerElement = document.createElement('th')
        var text = document.createTextNode(header)
        headerElement.appendChild(text)
        table.appendChild(headerElement)
    })
    ids.forEach((id, i) => {
        var tr = document.createElement('TR')
        table.appendChild(tr)
        var td1 = document.createElement('TD')
        var text1 = document.createTextNode(id)
        td1.appendChild(text1)
        tr.appendChild(td1)
        var td2 = document.createElement('TD')
        var text2 = document.createTextNode(types[i])
        td2.appendChild(text2)
        tr.appendChild(td2)
        table.appendChild(tr)
    })
    if(document.getElementById('oldTable')){
        document.getElementById('listado').replaceChild(table, document.getElementById('oldTable'))
    } else if (document.getElementById('item')) {
        document.getElementById('listado').replaceChild(table, document.getElementById('item'))
    } else {
        document.getElementById('listado').appendChild(table)
    }
}