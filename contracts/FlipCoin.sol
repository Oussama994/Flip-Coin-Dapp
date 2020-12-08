pragma solidity 0.5.12;

   contract flipcoin{

   address payable player1;

   constructor()public {

   player1=msg.sender;

   }
   address payable player2 = 0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2;
   string winnermessage="congratulation, you won, you doubled your bet amount";
   string losermessage="Sorry, you lost, try again!";
    event winner(string  winnermessage);
    event loser(string losermessage);

   function random() private view returns(uint){

       return now%2;
   }

   function getBalance()public view returns(uint){
       return address(this).balance;
   }

   function fallback() external payable{

   }

    function betplay(uint betamount) public payable{
      require(getBalance()>= betamount,"you don't have enough money");
        if(random()==0){
       player1.transfer(betamount*2);
       emit winner(winnermessage);
        }

        else {

        player2.transfer(betamount);
        emit loser(losermessage);

    }

    }
}
