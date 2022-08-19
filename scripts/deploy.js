async function main() {

    // // Get our account (as deployer) to verify that a minimum wallet balance is available
    // const [deployer] = await ethers.getSigners();

    // console.log(`Deploying contracts with the account: ${deployer.address}`);
    // console.log(`Account balance: ${(await deployer.getBalance()).toString()}`);

    // // Fetch the compiled contract using ethers.js
    // const NFT = await ethers.getContractFactory("NFT");
    // // calling deploy() will return an async Promise that we can await on 
    // const nft = await NFT.deploy();

    // console.log(`Contract deployed to address: ${nft.address}`);



    const { task } = require("hardhat/config");
    const { getAccount } = require("./helpers");


    task("check-balance", "Prints out the balance of your account").setAction(async function (taskArguments, hre) {
        const account = getAccount();
        console.log(`Account balance for ${account.address}: ${await account.getBalance()}`);
    });

    task("deploy", "Deploys the NFT.sol contract").setAction(async function (taskArguments, hre) {
        const nftContractFactory = await hre.ethers.getContractFactory("NFT", getAccount());
        const nft = await nftContractFactory.deploy();
        console.log(`Contract deployed to address: ${nft.address}`);
    });
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});

// contract address on rinkyby
// 0xc7a0F47BFEBe8e1780de4C06A0a66f147ebFF298