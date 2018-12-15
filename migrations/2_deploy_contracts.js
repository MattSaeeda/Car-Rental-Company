var CarRentalToken = artifacts.require("CarRentalToken");

module.exports = function(deployer) {
  deployer.deploy(CarRentalToken);
};

var Rent = artifacts.require("Rent");

module.exports = function(deployer) {
  deployer.deploy(Rent);
};

var Return = artifacts.require("Return");

module.exports = function(deployer) {
  deployer.deploy(Return);
};