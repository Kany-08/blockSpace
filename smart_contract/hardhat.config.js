// https://eth-rinkeby.alchemyapi.io/v2/fjN_s9z1XayNUPaNEs5uCtHGpJTNe0jd

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/fjN_s9z1XayNUPaNEs5uCtHGpJTNe0jd',
      accounts: ['e17e342127a45506d7c6833c8e8b25f418056b3aca7cfec78d152cd4be291f77']
    }
  }
}