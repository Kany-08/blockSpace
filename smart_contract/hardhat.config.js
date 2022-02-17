// https://eth-rinkeby.alchemyapi.io/v2/fjN_s9z1XayNUPaNEs5uCtHGpJTNe0jd

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/UXxSLyb33x4tPgRXWybvbx2ifrVI1q-5',
      accounts: ['a78e5d0c0e290f0ffba6bc654a8738683d7923034d52331bc15d853c05559ca4']
    }
  }
}