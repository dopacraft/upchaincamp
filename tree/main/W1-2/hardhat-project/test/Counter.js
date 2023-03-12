const { expect } = require("chai");

let counter;
let first,second;

describe("Counter", function () {
  async function init() {
    [first, second] = await ethers.getSigners();
    const Counter = await ethers.getContractFactory("Counter");
    counter = await Counter.deploy(100);
    
    console.log(`Counter is deployed to ${counter.address}, owner is ${first}`);
  }

  before(async function () {
    await init();
  });

  // owner调用count()
  it("msg.sender is owner", async function () {
    expect(await counter.counter()).to.equal(100);
    let tx = await counter.count();
    await tx.wait();
    expect(await counter.counter()).to.equal(101);
  });

  // otehr调用count()
  it("msg.sender is other", async function () {
    let counter2 = counter.connect(second);
    expect(await counter2.count()).to.be.revertedWith("only by Owner.")
  });

});
