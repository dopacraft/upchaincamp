// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Bank {
    address public owner;
    mapping(address => uint256) public deposits;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Permission Error: Only by owner.");
        _;
    }

    // deposit
    receive() external payable {
        deposits[msg.sender] += msg.value;
    }

    // withdraw
    function withdraw(uint256 amount) public {
        require(deposits[msg.sender] >= amount, "Amount Error: Insufficient balance.");
        deposits[msg.sender] -= amount;

        (bool success, ) = msg.sender.call{value: amount}(
            new bytes(0)
        );
        // payable(msg.sender).transfer(amount);
        require(success, "Transfer Error: ETH transfer failed.");
    }

    function withdrawAllOneAddress(address addr) public onlyOwner{
        payable(owner).transfer(deposits[addr]);
        deposits[addr] = 0;
    }

    function withdrawAll() public onlyOwner {
        payable(owner).transfer(address(this).balance);
    }
}
