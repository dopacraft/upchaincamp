// SPDX-License-Identifier: MIT
pragma solidity >=0.8.2 <0.9.0;

contract Counter {
    uint public counter;

    constructor(){
        counter = 0;
    }

    function count() public {
        counter += 1;
    }

    function add(uint x) public {
        counter += x;
    }
}