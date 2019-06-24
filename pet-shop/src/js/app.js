App = {
  web3Provider: null,
  PetShop: {},

  init: async function() {
    // Load pets.
    $.getJSON('../pets.json', function(data) {
      var petsRow = $('#petsRow');
      var petTemplate = $('#petTemplate');

      for (i = 0; i < data.length; i ++) {
        petTemplate.find('.panel-title').text(data[i].name);
        petTemplate.find('img').attr('src', data[i].picture);
        petTemplate.find('.pet-breed').text(data[i].breed);
        petTemplate.find('.pet-age').text(data[i].age);
        petTemplate.find('.pet-location').text(data[i].location);
        petTemplate.find('.btn-adopt').attr('data-id', data[i].id);

        petsRow.append(petTemplate.html());
      }
    });

    return await App.initWeb3();
  },

  initWeb3: async function() {
    /*
     * Replace me...
     */
     if(typeof web3 !== "undefind"){
        App.web3Provider=web3.currentProvider;
     }else{
        App.web3Provider= new Web3.providers.HttpProvider("http://localhost:7545")
     }
     web3=new Web3(App.web3Provider);

    return App.initContract();
  },

  initContract: function() {
    /*
     * Replace me...
     */
     $.getJSON('PetShop.json',function(data){
      var PetShopContract=TruffleContract(data);
      PetShopContract.setProvider(App.web3Provider);
      App.PetShop=PetShopContract.at("0x2d7fB9457D8F8A5983a69C987BaE5Ec92c4aeDdD")//智能合约的地址
     
     App.PetShop.AdoptedEvent(function(err,result){
      if(!err){
        console.log(result.args.petId.toString(10));
        console.log(result.args.adopter);
      }else{
        console.log(err);
      }
     });

     return App.updatePetStatus();

     })

     setInterval(App.updatePetStatus,3000);
     
    return App.bindEvents();
  },
  updatePetStatus:function(){
    App.PetShop.getAdoptedPets.call().then(function(pets){
      pets.forEach(function(petId,i){
        $(".panel-pet").eq(petId.toString(10)).find("button").text("Adopted").attr("disabled",true);
      })
    }).catch(function(err){
      console.error(err.message);
    })
  },

  bindEvents: function() {
    $(document).on('click', '.btn-adopt', App.handleAdopt);
  },

  markAdopted: function(petId) {
    /*
     * 标记领养
     */
     App.PetShop.isAdopted.call(petId).then(function(adopted){
        if (adopted) {
           $('.panel-pet').eq(petId).find("button").text("Adopted").attr("disabled",true);
        }else{
          $('.panel-pet').eq(petId).find("button").text("Adopt").removeAttr("disabled");
        }
     })
  },

  handleAdopt: function(event) {
    event.preventDefault();

    var petId = parseInt($(event.target).data('id'));

    /*
     * Replace me...
     */
     $(this).text("Processing ...").attr("disabled",true);
     web3.eth.getAccounts(function(error,accounts){
        if(error){
          console.error(error);
        }else{//TODO 单步调试
          var account=accounts[0];//TODO 为空 ？
          App.PetShop.adopt(petId,{from:account}).then(function(result){
            alert("Adoption success!");
            return App.markAdopted(petId)
          }).catch(function(err){
            console.error(err);//invalid address
            $(this).text("Adopt").removeAttr("disabled"); //$(this)   undefined ???
            //TypeError: Cannot read property 'createDocumentFragment' of undefined         
          })
        }
     })
  }

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
