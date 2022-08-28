const numbersArray = [ 5, 10, 15, 20, 25, 30, 35, 40 ]
const testString = "Bangladesh"
/*
// 1) Classical for loop

for ( let i = 0; i < numbersArray.length; i++ )
{
  console.log( numbersArray[ i ] )
}

for ( let i = 0; i < testString.length; i++ )
{
  console.log( testString[ i ] )
}


// 2) Array.from loop

// converts a string into array of string of each element

let b = Array.from( numbersArray )
console.log( b );

let a = Array.from( testString )
console.log( a );

let c = testString.split( " " )  // trick to convert the whole string to array
console.log( c );


// 3) for-of loop 

// Gives each element of array or string


for ( let items of numbersArray )
{
  console.log( items );
}

for ( let items of testString )
{
  console.log( items );
}


// 4) for-in loop

// In object it will gives keys 

// Here also in array it gives key because an array is acually

// Array = [index(as key):value]


for ( let items in numbersArray )
{
  console.log( items );
}


// 5) forEach loop

numbersArray.forEach( ( item ) =>
{
  console.log( item ** 2 );
  
} )

// testString.forEach( ( items ) =>
// {
  //   console.log( items );             // this will give an error as "not a function" 
  // } )
  
  // to solve is not a function 

  Array.from( testString ).forEach( ( items ) =>
  {
    console.log( items );
  } )
  
  */



