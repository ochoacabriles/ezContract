var chai = require('chai')
var chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
const { expect, assert } = chai
const testRevert = require('openzeppelin-solidity/test/helpers/assertRevert')

var mintableToken = artifacts.require('_mintableToken')
var mintedCrowdsale = artifacts.require('_mintedCrowdsale')

contract('Testing _mintableToken contract', (accounts) => {
    
    let mintableTokenInstance, mintedCrowdsaleInstance
    const name = 'mintableToken'
    const symbol = 'MTK'
    var decimals = 18
    var rate = 4
    var value = 1
    var testDecimals, owner, testBalance, startingValue, endingValue, testSupply

    it('Should deploy ERC20 mintable token + Minted Crowdsale', async() => {
        
        mintableTokenInstance = await mintableToken.new(name, symbol, decimals, {from: accounts[0]})
        mintedCrowdsaleInstance = await mintedCrowdsale.new(rate, accounts[0], mintableTokenInstance.address)
        expect(await mintableTokenInstance.symbol()).to.equal(symbol)
        expect(await mintableTokenInstance.name()).to.equal(name)
        testDecimals = await mintableTokenInstance.decimals()
        expect(testDecimals.toNumber()).to.equal(decimals)
        owner = await mintableTokenInstance.owner()
        expect(owner).to.equal(accounts[0])

    })

    it('Should transfer token ownership to crowdsale contract only if requested by owner', async() => {
        
        await testRevert.assertRevert(mintableTokenInstance.transferOwnership(mintedCrowdsaleInstance.address, {from: accounts[1]}))
        await mintableTokenInstance.transferOwnership(mintedCrowdsaleInstance.address, {from: accounts[0]})
        owner = await mintableTokenInstance.owner()
        expect(owner).to.equal(mintedCrowdsaleInstance.address)

    })

    it('Should mint & send tokens in exchange of ethers & should send ethers to owner', async () => {
        
        await web3.eth.getBalance(accounts[0], async (err, res) => {
            if (err) throw err
            startingValue = res
            await mintedCrowdsaleInstance.sendTransaction( {value: web3.toWei(value, 'ether'), from: accounts[1]})
            testSupply = await mintableTokenInstance.totalSupply()
            expect(testSupply.toString(10)).to.equal(web3.toWei( rate * value ))
            testBalance = await mintableTokenInstance.balanceOf(accounts[1])
            expect(testBalance.toString(10)).to.equal(web3.toWei( rate * value ))
            await web3.eth.getBalance(accounts[0], (err, res) => {
                if (err) throw err
                endingValue = res
                expect(endingValue.toNumber()).to.above(startingValue.toNumber())

            })

        })

    })

    it('Should be able to finish minting if required & revert transactions after finishing', async () => {

        await mintedCrowdsaleInstance.finishCrowdsale( {from: accounts[0]} )
        await testRevert.assertRevert( mintedCrowdsaleInstance.sendTransaction( {value: web3.toWei(value, 'ether'), from: accounts[1]}) )

    })

})