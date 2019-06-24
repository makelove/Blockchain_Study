pragma solidity ^0.5.0;

contract PetShop {
  struct PetDetail{
    address adopter;
    bool adopted;
  }
  mapping(uint=>PetDetail) public pets;
  uint[] public adoptedPetList;

  event AdoptedEvent(uint petId,address adopter);

  function adopt(uint petId) public returns(bool){
    pets[petId]=PetDetail({
      adopter:msg.sender,
      adopted:true
    });
    adoptedPetList.push(petId);
    emit AdoptedEvent(petId,msg.sender);//发送到以太坊
    return true;
  }
  function isAdopted(uint petId) public view returns(bool){
    return pets[petId].adopted;
  }
  function getAdoptedPets() public view returns(uint[] memory){
    return adoptedPetList;
  }



}
