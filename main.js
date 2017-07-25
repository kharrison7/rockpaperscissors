
// Demonstrates how to run a function and how to loop through an array of values.

function rps(){
let names = ["Frank", "Mark", "Monica"];
let text = "";
let i;


function hellos(name){
  console.log('Good morning ' + name + ', how are you doing today?');
}

for (i = 0; i < names.length; i++) {
    hellos(names[i]);
}

}
