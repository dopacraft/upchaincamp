const hre = require("hardhat");

async function main() {

  const Teacher = await hre.ethers.getContractFactory("Teacher");
  const teacher_prototype = await Teacher.deploy();
  await teacher_prototype.deployed();

  console.log(
    `Teacher contract deployed to ${teacher_prototype.address}`
  );
}




// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
