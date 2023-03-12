require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");

// custom task
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});
task(
  "blockNumber", "Prints the current block number",
  async (_, { ethers }) => {
    await ethers.provider.getBlockNumber().then((blockNumber) => {
      console.log("Current block number: " + blockNumber);
    });
  }
);
task("balance", "Prints an account's balance")
  .addParam("account", "The account's address")
  .setAction(async (taskArgs) => {
    const balance = await ethers.provider.getBalance(taskArgs.account);

    console.log(ethers.utils.formatEther(balance), "ETH");
  });

require('dotenv').config({ path: '.env' });
const mnemonic = process.env.Mnemonic;
const privateKey1 = process.env.PrivateKey1;
const privateKey2 = process.env.PrivateKey2;
const sepolia_https = process.env.Alchemy_sepolia_https;
const etherscan_API_KEY = process.env.Etherscan_API_KEY;

module.exports = {
  defaultNetwork: "Sepolia",
  networks: {
    localhost: {
      chainId: 31337,     // 仅做验证，可省略
      url: "http://127.0.0.1:8545",
    },
    hardhat: {
      // https://hardhat.org/hardhat-network/docs/reference#config
    },
    // goerli: {
    //   chainId: 5,
    //   url: "https://eth-goerli.alchemyapi.io/v2/123abc123abc123abc123abc123abcde",
    //   accounts: {
    //     mnemonic: mnemonic,
    //   }
    // },
    Sepolia: {
      chainId: 11155111,
      url: sepolia_https,
      accounts: [privateKey1, privateKey2],
      gas: 2000000,
    },
    // ETHMainnet: {
    //   chainId: 1;
    //   url:
    //   accounts:
    // }
  },

  solidity: {
    compilers: [
      {
        version: "0.8.18",
        settings: {
          // optimizer默认值： { enabled: false, runs: 200 }
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
      {
        version: "0.8.6",
      }
    ],
  },

  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },

  mocha: {
    timeout: 40000
  },

  etherscan: {
    apiKey: etherscan_API_KEY
  }
}