"use strick"

// intro to variable

// variable can use store some function
// we can use that information later
// we can change that information later

// declare a variable

// var firstName ="Ram Lawania";
// // use a variable
// console.log(firstName);


// // change value

// firstName ="Vidhyanshu";
// console.log(firstName);


//  Let keyword

// declare variable with let keyword

// let firstName ="ram lawania";

// firstName = "lawania";

// console.log(firstName);

// block scope vs function scope 

// Block Scope
// Before ES6 (2015), JavaScript variables had only Global Scope and Function Scope.

// ES6 introduced two important new JavaScript keywords: let and const.

// These two keywords provide Block Scope in JavaScript.

// Variables declared inside a { } block cannot be accessed from outside the block:

// Example
// {
//   let x = 2;
// }
// // x can NOT be used here
// Variables declared with the var keyword can NOT have block scope.

// Variables declared inside a { } block can be accessed from outside the block.

// Example
// {
//   var x = 2;
// }
// // x CAN be used here


// Function Scope
// JavaScript has function scope: Each function creates a new scope.

// Variables defined inside a function are not accessible (visible) from outside the function.

// Variables declared with var, let and const are quite similar when declared inside a function.

// They all have Function Scope:

// function myFunction() {
//   var carName = "Volvo";   // Function Scope
// }
// function myFunction() {
//   let carName = "Volvo";   // Function Scope
// }
// function myFunction() {
//   const carName = "Volvo";   // Function Scope
// }



// Const Keyword

// Declare const Variable

// we can not change the value of const

const pi = 3.14;

// pi =3.15;

console.log(pi);



