require("dotenv").config();
require("@nomiclabs/hardhat-truffle5");
require("@nomiclabs/hardhat-solhint");
require("solidity-coverage");
// require("hardhat-gas-reporter");

let mnemonic;
if (process.env.TRUFFLE_MNEMONIC) {
  mnemonic = process.env.TRUFFLE_MNEMONIC;
}

module.exports = {
  solidity: {
    version: "0.8.0",
    settings: {
      // https://hardhat.org/hardhat-network/#solidity-optimizer-support
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  // https://hardhat.org/config/#path-configuration
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 20000,
  },
  gasReporter: {
    enabled: true, //process.env.REPORT_GAS ? true : false,
    currency: "USD",
    outputFile: "gas-report.txt",
  },
};
