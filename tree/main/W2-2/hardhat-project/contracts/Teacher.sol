// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

interface IScore{
    function setScore(address addr, uint score) external;
}

contract Teacher{
    address public owner;
    
    constructor(){
      owner = msg.sender;
    }
    /*
     * @description: 
     * @param {address} scoreAddr is Score contract address
     * @param {address} student 
     * @param {uint} score
     */    
    function setStudentScore(address scoreAddr, address student, uint score) external {
      require(msg.sender == owner, "Permission Error: Only by owner.");

      IScore(scoreAddr).setScore(student, score);
    }
}