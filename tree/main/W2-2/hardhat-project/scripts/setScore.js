const { ethers } = require("hardhat");

async function main() {
    const [owner, second] = await ethers.getSigners();
    console.log("owner address: ", owner.address);

    const Teacher = await ethers.getContractFactory("Teacher");
    const teacher_prototype = await Teacher.attach("0x0Ee3cf817dc173a4EA90F4a80D8C4d98517F2b20").connect(second);     

    const student = "0x7c3d7771Ecb25f0189A6649FD9cd0661c28AC44F";
    const scoreAddr = "0xCDc9038efDdB39a55EF291445099787F741371B3";
    const score = 99

    
    const setScore = await teacher_prototype.setStudentScore(scoreAddr, student, score);
    await setScore.wait();
    console.log(`将学生${student}的分数修改为${score}成功。`);


}








main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
