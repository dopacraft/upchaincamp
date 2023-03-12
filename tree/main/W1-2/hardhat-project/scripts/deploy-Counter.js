const hre = require("hardhat");

async function main() {

  const Counter = await hre.ethers.getContractFactory("Counter");
  const num = 100;
  const counter = await Counter.deploy(num);
  await counter.deployed();

  console.log(`Deploy the Counter to ${counter.address} auccess, Initial parameters is ${num}.`);
}










// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
