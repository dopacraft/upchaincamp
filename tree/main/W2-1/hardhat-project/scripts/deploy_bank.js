const hre = require("hardhat");

async function main() {

  const Bank = await hre.ethers.getContractFactory("Bank");
  const bank_prototype = await Bank.deploy();
  await bank_prototype.deployed();

  console.log(
    `Bank contract deployed to ${bank_prototype.address}`
  );
}




// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
