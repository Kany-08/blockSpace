const hre = require("hardhat");

async function main() {

  const BlockSpace = await hre.ethers.getContractFactory("BlockSpace");
  const blockSpace = await BlockSpace.deploy();

  await blockSpace.deployed();

  console.log("My NFT deployed to:", blockSpace.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });