// Program to add first n natural numbers

const prompt = require( "prompt-sync" )()

// console.log( 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 + 15 + 16 + 17 + 18 + 19 + 20 + 21 + 22 + 23 + 24 + 25 + 26 + 27 + 28 + 29 + 30 + 31 + 32 + 33 + 34 + 35 + 36 + 37 + 38 + 39 + 40 )

// To avoid such lengthy calculations we do use of loops

let sum = 0


const summation = () =>
{
  let a = prompt( "Enter the number upto which you want sum :=====>  " )
  for ( let i = 1; i <= a; i++ )
  {
    ( sum += i );
  }
  console.log( sum )
}

summation()



