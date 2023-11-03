// https://eth-sepolia.g.alchemy.com/v2/QK5JRbXc_QXE3xOW_Wm04ur9wPJxRbCw

require("@nomiclabs/hardhat-waffle")

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia:{
      url: 'https://eth-sepolia.g.alchemy.com/v2/QK5JRbXc_QXE3xOW_Wm04ur9wPJxRbCw',
    accounts: [ '84d2462694883d1a209eae51c4b0cd0ca1e27b723d19277c213da20db118b59b' ]
    }
  }
}