/*
const prompt = require( "prompt-sync" )()


// Q1) What will be the output of this < console.log( "har\"".length ) >;

// Ans===>

// console.log( "har\"".length );


// Q2) Explore includes,startsWith and endsWith functions of strings.


// Ans===>

let string = "India is my country"

// includes

// let ans1 = string.includes( "i" )
// console.log( ans1 );
// ans1 = string.includes( "H" )
// console.log( ans1 );

// startsWith

ans1 = string.startsWith( "I" )

console.log( ans1 );

// endsWith

ans1 = string.endsWith( "y" )
console.log( ans1 );
// Q3) Write a program to convert the given string into lowercase

const LowercaseConverter = ( string ) =>
{
  console.log( string.toLowerCase() )
}

const strings = prompt( "Enter any string:===> " )

LowercaseConverter( strings )


// Q4) Extract the amount from the below given string 

// Please give RS 1000.

// Ans===>

let givenString = "Please give RS 1000."

let AmountIndex = givenString.indexOf( "1000" )

let result = ( Number.parseInt( givenString.slice( AmountIndex, ( givenString.length - 1 ) ) ) );

console.log( result, typeof result );

// Q5) Try to change any character of above string.Were you able to doe it..?


// Ans===>

givenString[ 0 ] = "Hii"

console.log( givenString );

// Strings are immutable so we can't change the character of any string
*/