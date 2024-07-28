console.log("First Demo test for TypeScripts..");
function getInfo(){
    if(firstName.length>5){// Error will display at compile time if variable is not defined
        console.log("Pass");
    }else{
        console.log("FAIL");
    }
}

getInfo()

// Define the Variables in TypeScripts
let age: number=30;
let firstName:string="Vishal";
let isActive:boolean=true;

//////
//1---TypeScript is a statically typed language
    // Data Types should be same as data. like Java.
    // Exp
    let a: number=10;// number will store any number values with floting numbers
    let b:string="Name";// Any String or characters 

//2---- Type Inference (Compile Time)
    let c=10;
    let d="String"
    let e=true;

//3--- null and undefined 
  let city:null=null;
  let country:undefined=undefined;

//4-- any: tpe (Use for dynamic data type)
  let anyValue:any=80;
  anyValue="Vishal";
  anyValue=true;

//5-Type Annotations --
///Type Annotations on Variables
//When you declare a variable using const, var, or let, you can optionally add a type annotation to explicitly specify the type of the variable:
//Exp

let myName: string = "Alice";

// Void type (Function dont return any value)
  function printHello():void{
    console.log("Hello");
      // Return type will be void by default
  }

  function getNumber():number{// Return number only
    return 123;
  }
  
  function getAnything():any{//Return will be anything
    return "232343";
  }

// Define function parameters
function addition(a1: number,b1: any):number{
    return a1+b1;
}
addition(5,7);


