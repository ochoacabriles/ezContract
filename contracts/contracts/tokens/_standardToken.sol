pragma solidity ^0.4.24;

import 'openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol';
import 'openzeppelin-solidity/contracts/token/ERC20/DetailedERC20.sol';

contract _standardToken is DetailedERC20, StandardToken {

    constructor(string _name, string _symbol, uint8 _decimals, uint256 _supply) 
        DetailedERC20(_name, _symbol, _decimals) public {
            totalSupply_ = _supply;
            balances[msg.sender] = totalSupply_;
    }
}