pragma solidity ^0.4.24;

import '../tokens/_standardToken.sol';
import 'openzeppelin-solidity/contracts/crowdsale/Crowdsale.sol';

contract _crowdsale is Crowdsale {
    constructor(uint256 _rate, address _wallet, ERC20 _token) 
        Crowdsale(_rate, _wallet, _token) public {
        }

}