var names = ["Vishal", "Ravi"];
console.log(names[0]);
// using Generic
var employee = ["Vishal", "Ravi"];
var employeId = ["Vishal", true, null];
console.log(employee[1]);
// MultiType array with only given data types.
var values = ["vishal", 12];
var val = ["Vishal", false];
// Array declaration and init:
var users1;
users1 = ["Vishal", "Singh"];
var employees = ["Vishal", "Singh", "Ravi"];
for (var i = 0; i < employees.length; i++) {
    console.log(employees[i]);
}
// For in loop
for (var e in employees) {
    console.log(e + ":" + employees[e]);
}
