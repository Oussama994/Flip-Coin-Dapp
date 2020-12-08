const flipcoin = artifacts.require("flipcoin");

module.exports = function(deployer) {
  deployer.deploy(flipcoin);
};
