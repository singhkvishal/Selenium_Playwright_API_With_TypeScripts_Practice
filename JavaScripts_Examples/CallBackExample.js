
//A callback function is a function passed into another function as an argument, 
//which is then invoked inside the outer function to complete some kind of routine or action

function Greet(name,callback){
    console.log("Hello "+ name);
    callback();
}
function welcome(){
    console.log("Welcome !!");
}

Greet("Vishal",welcome)