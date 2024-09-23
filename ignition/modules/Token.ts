// const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const TokenModule = buildModule("TokenModule", (m) => {
  const token = m.contract("Token", ["Name1", "Symbol1", 10000000, "0x4DA21707a86F29033F26c0adBd70E9D105299467"]);

  return { token };
});

module.exports = TokenModule;