import { ethers } from 'hardhat';

/// Opensea image URL: https://testnets.opensea.io/assets/rinkeby/0x635e64e62ec1789b5e5a1dda3e68b772241cdc05/0
/// Contract Address on Rinkeby:  0x635e64E62EC1789b5E5a1Dda3e68b772241cDc05
/// Deployment Transaction Hash: 0x61ae58e9bf30f7287e8d7e4ce08ca8c004f64a0069d9ded0cab664388ac0f578

async function main() {
  const AmaraNFT = await ethers.getContractFactory('AmaraNFT');
  const nft = await AmaraNFT.deploy();

  await nft.deployed();

  console.log('NFT deployed to:', nft.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});