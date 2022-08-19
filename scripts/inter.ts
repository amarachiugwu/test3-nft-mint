import { ethers } from 'hardhat';

async function main() {
  const amount = ethers.utils.parseEther('0.1');

  //get pointer to piggybank interface
  const nftContractRinkeby = '0x635e64E62EC1789b5E5a1Dda3e68b772241cDc05';

  const nftPointer = await ethers.getContractAt(
    'IAmaraNFT',
    nftContractRinkeby
  );

  //call the safemint function
  const nftMint = await nftPointer.safeMint(
    '0x22329EbC0D33A237B665c5e1B5c00bf58F311006',
    'QmNjVnsmUiGK7gYa6YVrYS7745ciZEmxk7tSw7StmLPxVq'
  );


  /// Opensea image URL: https://testnets.opensea.io/assets/rinkeby/0x635e64e62ec1789b5e5a1dda3e68b772241cdc05/0
  /// Contract Address on Rinkeby:  0x635e64E62EC1789b5E5a1Dda3e68b772241cDc05
  /// Deployment Transaction Hash: 0x61ae58e9bf30f7287e8d7e4ce08ca8c004f64a0069d9ded0cab664388ac0f578


  const nftMintTnx = await nftMint.wait();
  console.log('mint receipt is', nftMintTnx);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});