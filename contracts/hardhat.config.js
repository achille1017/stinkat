require("@nomicfoundation/hardhat-toolbox");
const keys = require("./keys.json")

module.exports = {
  solidity: "0.8.24",
  networks: {
    BSCTestnet: {
      url: `https://bsc-testnet.publicnode.com`,
      accounts: [keys["BNBTestnet"]]
    },
    Base:{
      url: `https://mainnet.base.org`,
      accounts: [keys["Base"]]
    }
  }
};
