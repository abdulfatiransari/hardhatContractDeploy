import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.27",
  networks: {
    // Add your network configurations
    hardhat: {
      chainId: 11155111, // Useful for local development
    },
    sepolia: {
      url: "https://1rpc.io/sepolia", // Your Alchemy/Infura endpoint
      accounts: [`0x${process.env.PRIVATE_KEY}`], // Your private key
    },
  },
};

export default config;
