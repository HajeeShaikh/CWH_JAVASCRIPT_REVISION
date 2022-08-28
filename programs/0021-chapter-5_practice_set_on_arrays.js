const prompt = require( "prompt-sync" )()
/*
// Q1) Create an array of numbers and take input from the user to add numbers to this array.

// Ans:===>

let usersArray = []


// let item = prompt( "Enter the item :===> " )

// item = Number.parseInt( item )

// usersArray.push( item )
// console.log( "usersArray:===> ", usersArray );

// Q2) Keep adding numbers to the array in 1 until 0 is added to the array

// Ans===>

do
{

  let item = prompt( "Enter the item :===> " )

  item = Number.parseInt( item )


  if ( item != 0 )
  {
    usersArray.push( item )
  } else
  {
    break
  }
} while ( true )

console.log( "usersArray:===> ", usersArray );

// Q3) Filter for numbers divisible by 10 from an given array.

// Ans===>

let givenArray = [ 10, 34, 5, 3, 223, 56, 90, 78, 90, 7, 579, 560, 469460, 4, 73 ]

// Ans===>
// method-1 using for of loop

let numDivisibeby10 = []

for ( let item of givenArray )
{
  // console.log( item );
  if ( item % 10 == 0 )
  {

    console.log( item );
    numDivisibeby10.push( item )

  }
}
console.log( "numDivisibeby10:===> ", numDivisibeby10 );

// method-2 using higher order array method (filter)

let multipleOfTen = givenArray.filter( ( element ) =>
{
  return element % 10 == 0
} )

console.log( "multipleOfTen:===> ", multipleOfTen );

// Q4) Create an array of square of given elements.

// Ans===>

// method-1 : using for of loop
let givenArray = [ 1, 3, 4, 5, 6, 7, 8 ]
let squaredArray = []

// for ( let item of givenArray )
// {
//   squaredArray.push( item * item )
// }

// console.log( squaredArray );

// method-2 using forEach loop

// givenArray.forEach( ( item ) =>
// {
  //   return squaredArray.push( item * item )
  // } )

  // console.log( squaredArray );


  // method-3 using higher order array method (map)

  // see the difference here we are getting automatically an new array without pushing

  // without return in map it will gives the values of array as undefined.

  let mapSquaredArray = givenArray.map( ( item ) => { return item ** 2 } )
  console.log( mapSquaredArray );
  */

// Q5) Use reduce to calculate factorial of a given number from an array of first n natural numbers (n being the number whose factorial being calculated.)

let a = [ 4 ]

let testFact = a.reduce( ( initial, next ) =>
{
  while ( true )
  {
    if ( initial != next )
    {
      return initial * ( next - 1 )
    }
    else
    {
      break
    }
  }

}, initial = 1 )

console.log( testFact );
