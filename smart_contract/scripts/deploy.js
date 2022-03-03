

const main = async () => {

  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();

  await transactions.deployed();
  
  const Nft = await hre.ethers.getContractFactory("FiredGuys");
  const nft = await Nft.deploy();

  await nft.deployed();
  console.log("Nft deployed to:", nft.address);
}


const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);  
  }
}

runMain();
