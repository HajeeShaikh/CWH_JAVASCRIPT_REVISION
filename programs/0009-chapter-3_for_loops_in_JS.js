/*

// for loop    ===> loop a block of code no. of times

// Program to add first n natural numbers

const prompt = require( "prompt-sync" )()

// console.log( 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 + 15 + 16 + 17 + 18 + 19 + 20 + 21 + 22 + 23 + 24 + 25 + 26 + 27 + 28 + 29 + 30 + 31 + 32 + 33 + 34 + 35 + 36 + 37 + 38 + 39 + 40 )

// To avoid such lengthy calculations we do use of loops

let sum = 0


const summation = () =>
{
  let a = prompt( "Enter the number upto which you want sum :=====>  " )
  a = Number.parseInt( a )       // because the o/p of the prompt is a string
  for ( let i = 1; i <= a; i++ )
  {
    ( sum += i );
  }
  console.log( sum )
}

summation()



// for-in loop    ===> loops through keys of an object


let apsisCompanyEmployees = {
  E1: "Khizer Bhai",
  E2: "Aatif Bhai",
  E3: "Saleem Bhai",
  "E4-E30": "Other Staff"
}

for ( let keys in apsisCompanyEmployees )
{
  console.log( keys )

  console.log( keys, ":", apsisCompanyEmployees[ keys ] );
}



// for-of loops in values of an object

let name = "Hajee"

for ( let values of name )
{
  console.log( values );
}
*/
