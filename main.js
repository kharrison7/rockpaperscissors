


function rps(){

//
let r = Math.floor((Math.random() * 3) + 1);


console.log(r);

var computer;

if (r === 1){
  computer = 'paper';
}
else if (r === 2){
  computer = 'rock'
}
else{
  computer = 'scissors'
}

console.log("Computer chose " + computer);





let me = 'rock'; // Change this to test your code

console.log("I choose " + me + ". ")


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
