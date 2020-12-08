var web3 = new Web3(Web3.givenProvider);
var contractInstance;

$(document).ready(function() {
    window.ethereum.enable().then(function(accounts){
      contractInstance = new web3.eth.Contract(window.abi, "0xA26B367A695dceF72Ae840648784FAafcc2339BF", {from: accounts[2]});

    $("#get_data_button").click(fetchAndDisplay);
    $("#add_data_button").click(inputData);

});

function inputData(){
  var betamount = $("#bet_input").val();
  contractInstance.methods.betplay(betamount).send()
    .on('transactionHash', function(hash){ // This to let us when the transaction is  hashed.
      console.log("tx hash");
    })
    .on('confirmation', function(confirmationNumber, receipt){// this is to let us know if the transaction is confirmed, in the real mainnet a 12 confirmation is required to be sure that the transaction has been confirmed
        console.log("conf");
    })
    .on('receipt', function(receipt){// this will enable us to get a receipt, a notification when our contract is mined for the first time in the blockchain.
      console.log(receipt); //We use these 3 clever functions because in the main net the transaction take time and our contract takes time to be mined in a blockchain, so we use them to know if is every is alright or not
    })
  }
function fetchAndDisplay(){
  contractInstance.methods.getBalance().call().then(function(res){
    displayInfo(res);
  });
}
function displayInfo(res){

  $("#balance_output").text((address(this).balance)); //or we can write text(res.age)

}
