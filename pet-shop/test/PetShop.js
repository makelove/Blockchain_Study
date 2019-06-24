var PetShop=artifacts.require("./PetShop.sol");
var petId=1;

contract("PetShop",function(accounts){
	it("Adopt should be successful.",function(){
		var shop;
		return PetShop.deployed().then(function(instance){
			shop=instance;
			return shop.adopt(1);
		}).then(function(result){
			return shop.isAdopted(petId)
		}).then(function(adopted){
			assert.equal(adopted,true,'Adopt Fail')
		})
	})

	it("Adopted Pets should match ",function(){
		return PetShop.deployed().then(function(instance){
			return instance.getAdoptedPets();
		}).then(function(pets){
			assert.equal(pets[0].toString(10),petId,"Pet's status error")
		})
	})
})