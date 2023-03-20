const hre = require("hardhat");

async function main() {
  // 先部署Teacher，再部署Score
  const teacherAddr = "0x0Ee3cf817dc173a4EA90F4a80D8C4d98517F2b20";

  const Score = await hre.ethers.getContractFactory("Score");
  const score_prototype = await Score.deploy(teacherAddr);
  await score_prototype.deployed();

  console.log(
    `Score contract deployed to ${score_prototype.address}`
  );
}




// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
