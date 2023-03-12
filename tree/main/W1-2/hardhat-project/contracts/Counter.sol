// SPDX-License-Identifier: MIT
pragma solidity >=0.8.2 <0.9.0;

contract Counter {
    uint public counter;
    address public owner;

    constructor(uint num){
        counter = num;
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(owner == msg.sender, "only by Owner.");
        _;
    }

    function count() public onlyOwner {
        counter += 1;
    }

    function add(uint x) public {
        counter += x;
    }
}