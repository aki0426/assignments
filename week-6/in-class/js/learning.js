// "use strict" tells the browser to enforce some rules about what can be in our JavaScript.
"use strict";

let my_name = "Alice"
let your_name = "Nimbus"

var name = prompt("Whats your name?")

if (name === "Alice") {

 renderOutput("That's me!");
}
  else if (name === "Nimbus") {
   
  renderOutput("That's Nimbus!");
  
 
} else {
  renderOutput("I must be someone else");
  
} 

for (var index = 0; index < 10; index++) {
  
  renderOutput(index);
}

function helloWorld() {
  renderOutput("Hello World");
}

helloWorld();

function helloName(name) {
renderOutput("Hello " + name);
}

helloName ("Alice");


function todaysHours(days_hours) {
  renderOutput(days_hours);
  
}

//todaysHours("Tuesday: 9a - 5p");

hours.forEach(todaysHours);




