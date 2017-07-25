


function rps(){

//This makes a random int 1-3.
let r = Math.floor((Math.random() * 3) + 1);


console.log(r);

//This sets computer to paper, rock, or scissors based on the random int.
var computer;


//Orginal code not using switch.
// if (r === 1){
//   computer = 'paper';
// }
// else if (r === 2){
//   computer = 'rock'
// }
// else{
//   computer = 'scissors'
// }

switch (r){
  case 1:
  computer = 'paper';
  break;
  case 2:
  computer = 'rock';
  break;
  case 3:
  computer = 'scissors';
  break;
  default:
  console.log("r doesn't equal 1,2, or 3.");
}


console.log("Computer chose " + computer);




//This lets you chose your move.
let me = 'rock'; // Change this to test your code

console.log("I choose " + me + ". ")


//This determines who won, lost, and tied.
if (computer === me){
  console.log("Looks like a tie!");
}
  else if (r === 2 && me === 'paper'){
    console.log("I win!");
  }
  else if (r === 2 && me === 'scissors'){
    console.log("Computer wins!");
  }

  else if (r === 1 && me === 'scissors'){
    console.log("I win!");
  }
  else if (r === 1 && me === 'rock'){
    console.log("Computer wins!");
  }

  else if (r === 3 && me === 'rock'){
    console.log("I win!");
  }
  else if (r === 3 && me === 'paper'){
    console.log("Computer wins!");
  }

}

//Console appears when you click inspect and then console.
