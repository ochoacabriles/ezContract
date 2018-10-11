var plainToken = artifacts.require("./plainToken.sol");
var basicCrowdsale = artifacts.require("./basicCrowdsale.sol")

const name = 'plainToken';
const symbol = 'PT';
const rate = web3.toBigNumber(4);
const decimals = 18;
const supply = web3.toWei(100, 'ether')

module.exports = async function(deployer, network, accounts) {

    deployer.deploy(plainToken, name, symbol, decimals, supply).then(() => {
        return deployer.deploy(basicCrowdsale, rate, accounts[0], plainToken.address)
            .then( () =>{
            }).catch( (err) => {
                console.log('Ocurrió un error', err.message)
            })
    })
};