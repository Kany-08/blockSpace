// https://eth-rinkeby.alchemyapi.io/v2/fjN_s9z1XayNUPaNEs5uCtHGpJTNe0jd
const dotenv = require('dotenv')
dotenv.config()
require('@nomiclabs/hardhat-waffle');
console.log(process.env.PRIVATE_KEY)
module.exports = {
  solidity: '0.8.4',
  networks: {
    rinkeby: {

      accounts: [`${process.env.PRIVATE_KEY}`],
      url: "https://eth-rinkeby.alchemyapi.io/v2/oGsdsYwN-uzJuD8gA5M7MfJ56neZAhoW"

    }
  }
}
