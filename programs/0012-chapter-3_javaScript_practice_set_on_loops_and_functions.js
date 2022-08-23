/*
const prompt = require( "prompt-sync" )()

//  Q1) Write a program to print the marks of a student in an object using for loop.
const obj = {
  harry:98,
  rohan:70,
  akash:7
}



// Ans using for-loop =====>

const marks = {
  harry: 98,
  rohan: 70,
  akash: 7
}


console.log( Object.keys( marks ) )
console.log( Object.keys( marks ).length )
console.log( Object.values( marks ) )
console.log( Object.values( marks ).length )


for ( let i = 0; i < Object.keys( marks ).length; i++ )
{
  console.log( ( Object.keys( marks )[ i ] ), ":", Object.values( marks )[ i ] );
}


// Q2) Solve the above question using for-in loop
// Ans using for-in-loop =====>

for ( let key in marks )
{
  console.log( key, ":", marks[ key ] )
}


// Q3) Write a program to print "try again" until the user enters the correct number.

// Ans =====>

const Correct_Number = 10



while ( true )
{
  let Guess_Number = prompt( "Enter your guess numeber:=>  " )
  Guess_Number = Number.parseInt( Guess_Number )
  if ( Correct_Number === Guess_Number )
  {
    console.log( "You have entered the correct number ... Congratulations !!!!!!" )
    break
  }
  console.log( "Try again" );
}


// Q4) Write a function to find mean of 5 numbers.

const MeanOfFiveNumbers = ( num1, num2, num3, num4, num5 ) =>
{
  
  return ( ( num1 + num2 + num3 + num4 + num5 ) / 5 )
}

let num13 = prompt( "Enter First Number:=> " )
num13 = Number.parseInt( num13 )
let num23 = prompt( "Enter Second Number:=> " )
num23 = Number.parseInt( num23 )
let num33 = prompt( "Enter Third Number:=> " )
num33 = Number.parseInt( num33 )
let num43 = prompt( "Enter Fourth Number:=> " )
num43 = Number.parseInt( num43 )
let num53 = prompt( "Enter Fifth Number:=> " )
num53 = Number.parseInt( num53 )

let result = MeanOfFiveNumbers( num13, num23, num33, num43, num53 )

console.log( "Result / Average of five numbers:=> ", result );

*/