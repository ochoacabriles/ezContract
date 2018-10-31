pragma solidity ^0.4.24;

import '../tokens/_mintableToken.sol';
import 'openzeppelin-solidity/contracts/crowdsale/emission/MintedCrowdsale.sol';
import 'openzeppelin-solidity/contracts/ownership/Ownable.sol';

contract _mintedCrowdsale is MintedCrowdsale, Ownable {
    constructor(uint256 _rate, address _wallet, ERC20 _token) 
        Crowdsale(_rate, _wallet, _token) public {
        }

    function finishCrowdsale() public onlyOwner {
        MintableToken(address(token)).finishMinting();
    }

}