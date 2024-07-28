let names:string[]=["Vishal","Ravi"];
console.log(names[0]);

// using Generic

let employee:Array<string>=["Vishal","Ravi"];
let employeId:Array<any>=["Vishal",true,null];
console.log(employee[1]);

// MultiType array with only given data types.
let values: (string|number)[]=["vishal",12];
let val:Array<string|boolean>=["Vishal",false];

// Array declaration and init:
let users1:Array<string>;
users1=["Vishal","Singh"];

let employees:Array<string>=["Vishal","Singh","Ravi"];
for(let i=0;i<employees.length;i++){
    console.log(employees[i]);
}
// For in loop

for(let e in employees){
    console.log(e+ ":" + employees[e]);
}

