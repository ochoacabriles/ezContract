var chai = require('chai')
var chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
const { expect, assert } = chai
const testRevert = require('openzeppelin-solidity/test/helpers/assertRevert')

var standardToken = artifacts.require('_standardToken')
var crowdsale = artifacts.require('_crowdsale')

contract('Testing _crowdsale contract', (accounts) => {
    
    let tokenInstance, crowdsaleInstance
    const name = 'standardToken'
    const symbol = 'STK'
    var rate = 4
    var supply = 100e+18
    var decimals = 18
    var contractBalance, testBalance, testDecimals, startingValue, endingValue, deltaValue

    it('Should deploy ERC20 Token + Basic Crowdsale', async () => {

        tokenInstance = await standardToken.new(name, symbol, decimals, supply)
        crowdsaleInstance = await crowdsale.new(rate, accounts[0], tokenInstance.address)
        expect(await tokenInstance.symbol()).to.equal(symbol)
        expect(await tokenInstance.name()).to.equal(name)
        testDecimals = await tokenInstance.decimals()
        expect(testDecimals.toNumber()).to.equal(decimals)

    })

    it('Should send all tokens to crowdsale contract', async () => {

        await tokenInstance.transfer(crowdsaleInstance.address, supply, {from: accounts[0]})
        contractBalance = await tokenInstance.balanceOf(crowdsaleInstance.address)
        expect(contractBalance.toNumber()).to.equal(supply)
    })

    it('Should send tokens in exchange of ethers & should send received ethers to owner', () => {
        
        web3.eth.getBalance(accounts[0], async (err, res) => {
            if (err) throw err
            startingValue = res
            await crowdsaleInstance.sendTransaction({ value: web3.toWei(1, 'ether'), from: accounts[1]})
            testBalance = await tokenInstance.balanceOf(accounts[1])
            contractBalance = await tokenInstance.balanceOf(crowdsaleInstance.address)
            web3.eth.getBalance(accounts[0], (err, res) => {
                if (err) throw err
                endingValue = res
                deltaValue = endingValue.toNumber() - startingValue.toNumber()
                expect(testBalance.toNumber()).to.equal(4e+18)
                expect(contractBalance.toNumber()).to.equal(96e+18)
                expect(deltaValue).to.equal(1e+18)

            })
        })

    })

    it('Should revert when supply is not enough', async() => {

        testRevert.assertRevert(crowdsaleInstance.sendTransaction( {value: web3.toWei(26, 'ether'), from: accounts[2]}))

    })

})
