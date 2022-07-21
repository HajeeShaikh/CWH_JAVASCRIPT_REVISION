// Q1) Create a variable of type string and try to add a number to it.

// Answer ==>


// let a = "Universe"

// let b = 002

// let result = a + b

// console.log( result, "Question-1 Answer" );
// console.log( "Question-1 => Answer ==>", result );


// Q2) Use typeof operator to check the type of answer in Q1.

// Answer ==> 

// console.log( "Question-2 => Answer ==>", typeof result )


// Q3) Create a const object in JavaScript . Can you change it to hold a number later ?

// Answer ==> 

// Object Creation 

// const Mobile = {

//     RedMi: 12345,
//     Samsung: 23457,
//     Realme: 65454,
//     iPhone: 2345432,
//     Nokia: 54333,
//     Vivo: 54345


// }

// console.log( Mobile );

// Trying to change value of object Mobile directly

// Mobile = 123  // It will give TypeError: Assignment to constant variable. Means we can't change the value of declared constant 

// Q4) Try to add a new key to the const object in (Q3) . Were you able to do it...?


// ==> Answer

// Mobile[ "Oppo" ] = 123432
// console.log( Mobile );


// In this way we can change the value of key and value pair of an object because we can't change the pointer itself of storage name but the value inside the pointer can be changed.


// Q5) Write a JS program to create a word-meaning dictionary of five words

// const dictionary = {
//     Apple: "सेब",
//     Banana: "केला",
//     Pear: "नाशपाती",
//     Orange: "संतरा",
//     Mango: "आम"
// }

// Ways to access items from object

// 1

// console.log( dictionary.Apple )

// // 2

// console.log( dictionary[ "Apple" ] )