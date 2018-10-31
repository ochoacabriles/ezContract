var _mintableToken = artifacts.require("./tokens/_mintableToken.sol");
var _mintedCrowdsale = artifacts.require("./crowdsales/_mintedCrowdsale.sol")

const mintableName = 'mintableToken';
const mintableSymbol = 'MT';
const rate = web3.toBigNumber(4);
const decimals = 18;

module.exports = async function(deployer, network, accounts) {

    deployer.deploy(_mintableToken, mintableName, mintableSymbol, decimals).then(() => {
        return deployer.deploy(_mintedCrowdsale, rate, accounts[0], _mintableToken.address)
            .then( () =>{
            }).catch( (err) => {
                console.log('Ocurrió un error', err.message)
            })
    })
};