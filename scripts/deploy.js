const hre = require("hardhat");

async function main() {
  const HAKTokenFactory = await hre.ethers.getContractFactory("HAKToken");
  const HAKToken = await HAKTokenFactory.deploy(1000000);

  await HAKToken.deployed();

  console.log("HAKToken :", HAKToken.address);
  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
