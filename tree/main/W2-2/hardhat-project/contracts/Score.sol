// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

contract Score{
  address public teacher;
  mapping(address => uint) public studentScores;

  error NotTeacher();

  constructor(address teacherAddr){
    teacher = teacherAddr;
  }

  modifier onlyTeacher(){
    // require(msg.sender == teacher, "Permission Error: Only by teacher.");
    // _;
    if(msg.sender != teacher){
      revert NotTeacher();
    }
    _;
  }

  // set score by teacher
  function setScore(address addr, uint score) external onlyTeacher {
      require(score <= 100, "Score Error: Cannot be greater than 10.");
      
      studentScores[addr] = score;
  }

}