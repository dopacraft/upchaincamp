const { ethers } = require("hardhat");

async function main() {
    const [owner, second] = await ethers.getSigners();
    console.log("owner address: ", owner.address);

    const Bank = await ethers.getContractFactory("Bank");
    const bank_prototype = await Bank.attach("0x7a5d019Ad22977CD8D47330113eD4008e717E9D5");     

    const address1 = "0x835ddAbB3349fA8B9E22E1Dd6628E43698998c6b";
    const address2 = "0x7c3d7771Ecb25f0189A6649FD9cd0661c28AC44F";

    // view balance
    const balance1 = await bank_prototype.deposits(address1);
    console.log(`${address1} 地址余额为：${ethers.utils.formatEther(balance1)};`);

    const balance2 = await bank_prototype.deposits(address2);
    console.log(`${address2} 地址余额为：${ethers.utils.formatEther(balance2)};`);



}








main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
