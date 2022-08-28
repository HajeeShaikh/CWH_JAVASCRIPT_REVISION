/* 
// Higher order array methods

let numbersArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// 6) map (element,index,array) method 

// * forEach also takes three parameters (element,index,array)

let resultOfForEach = numbersArray.forEach( ( element ) =>
{
  return ( "resultOfForEach:===> ", element ** 2 );
} )


console.log( "resultOfForEach:===> ", resultOfForEach );

let resultOfMap = numbersArray.map( ( element ) =>
{
  return ( "resultOfMap:===> ", element ** 2 );
} )

console.log( "resultOfMap:===> ", resultOfMap, "\n" );


// Difference 


*/
/*
resultOfForEach:===> undefined

// forEach mehod only perform the required operation and doesn't return any new array and also doesn't modify the existing array.

// Whereas map method perform required operation as well as return an new array but doesn't modify existing array.


resultOfMap:===> [
  1, 4, 9, 16, 25,
  36, 49, 64, 81, 100
]
*/

/*

// 7) filter method

// returns new array with satisfied condition.
// doesn't modify the existing/original array.

let resultOfFilter = numbersArray.filter( ( element ) =>
{
  return element < 5
} )

console.log( "resultOfFilter:===> ", resultOfFilter, "\n" );
console.log( numbersArray, "\n" );


// 8) reduce method 

// It returns a single value

// Here we can pass an modified initial value

let resultOfreduce = numbersArray.reduce( ( initialValue, nextValue ) =>
{
  return initialValue + nextValue
}, initialValue = 20 )

console.log( "resultOfreduce:===> ", resultOfreduce );
*/
