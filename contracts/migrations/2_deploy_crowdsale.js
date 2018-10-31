var _standardToken = artifacts.require("./tokens/_standardToken.sol");
var _crowdsale = artifacts.require("./crowdsales/_crowdsale.sol")

const standardName = 'standardToken';
const standardSymbol = 'ST';
const rate = web3.toBigNumber(4);
const decimals = 18;
const supply = web3.toWei(100, 'ether')

module.exports = async function(deployer, network, accounts) {

    deployer.deploy(_standardToken, standardName, standardSymbol, decimals, supply).then(() => {
        return deployer.deploy(_crowdsale, rate, accounts[0], _standardToken.address)
            .then( () =>{
            }).catch( (err) => {
                console.log('Ocurrió un error', err.message)
            })
    })
};