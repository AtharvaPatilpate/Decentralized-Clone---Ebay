const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
module.exports = {
  mocha: {},
  compilers: {
    solc: {
      version: '0.8.16'
    }
  },
  networks: {
    loc_development_development: {
      network_id: "*",
      port: 7545,
      host: "127.0.0.1"
    },
    "inf_ebay-clone_goerli": {
      network_id: 5,
      gasPrice: 100000000000,
      provider: new HDWalletProvider(fs.readFileSync('d:\\Documents\\dev-wallet.env', 'utf-8'), "https://goerli.infura.io/v3/03195181fdec4f5a97908c4a9792e0aa")
    }
  }
};
