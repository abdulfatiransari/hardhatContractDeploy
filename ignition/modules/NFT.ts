// const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const NFTModule = buildModule("NFTModule", (m) => {
    const nft = m.contract("NFT", ["Name1", "Symbol1", "0x4DA21707a86F29033F26c0adBd70E9D105299467"]);
  return { nft };
});

module.exports = NFTModule;