import "@nomicfoundation/hardhat-toolbox";
import { HardhatUserConfig, vars } from "hardhat/config";
const PRIVATE_KEY = vars.get("PRIVATE_KEY");
const ALCHEMY_KEY = vars.get("ALCHEMY_KEY");


const config: HardhatUserConfig = {
  solidity: "0.8.24",

  networks: {
    sepolia:{
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_KEY}`,
      accounts: [PRIVATE_KEY ?? ""]
    }
  }
};

export default config;
