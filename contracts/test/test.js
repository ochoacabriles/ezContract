var chai = require('chai')
var chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
const { expect, assert } = chai
const testRevert = require('../node_modules/openzeppelin-solidity/test/helpers/assertRevert.js')

var plainToken = artifacts.require('plainToken')
var basicCrowdsale = artifacts.require('basicCrowdsale')

contract('Testing ERC20 token', function(accounts) {
    let token
    let crowdsale
    const name = 'testToken'
    const symbol = 'TEST'
    var rate = 4
    var supply = 100e+18
    var decimals = 18
    var contractBalance, testBalance, testDecimals

    it('Should be able to deploy ERC20 Token + Basic Crowdsale', async () => {

        token = await plainToken.new(name, symbol, decimals, supply)
        crowdsale = await basicCrowdsale.new(rate, accounts[0], token.address)
        expect(await token.symbol()).to.equal(symbol)
        expect(await token.name()).to.equal(name)
        testDecimals = await token.decimals()
        expect(testDecimals.toNumber()).to.equal(decimals)

    })

    it('Should send all tokens to crowdsale contract', async () => {

        await token.transfer(crowdsale.address, supply, {from: accounts[0]})
        contractBalance = await token.balanceOf(crowdsale.address)
        expect(contractBalance.toNumber()).to.equal(supply)
    })

    it('Should send 4 tokens if 1 ETH is received', async() => {

        await crowdsale.sendTransaction({ value: web3.toWei(1, 'ether'), from: accounts[1]})
        testBalance = await token.balanceOf(accounts[1])
        contractBalance = await token.balanceOf(crowdsale.address)
        expect(testBalance.toNumber()).to.equal(4e+18)
        expect(contractBalance.toNumber()).to.equal(96e+18)

    })

    it('Should revert when supply is not enough', async() => {

        testRevert.assertRevert(crowdsale.sendTransaction( {value: web3.toWei(25, 'ether'), from: accounts[2]}))

    })

})
