/*
console.clear() // clear the console
console.log( console )  // shows what we can do with console.
console.table( console ) // Shows the key value pairs of an object in table format.
console.warn( "It is shown as warning" );
console.error( "It is shown as an error" );
console.time( "time start" )
console.timeEnd( "time start" )
console.assert( 5 > 7 )       // Assertion failed 
console.assert( 5 > 3 )       // Assertion passed

// Tricky Question

// How will you calculate the time required for for loop and while loop

console.time( "Time Required for 'for-loop' :===> " );
for ( let i = 0; i < 23; i++ )
{
  console.log( i );
}

console.timeEnd( "Time Required for 'for-loop' :===> " );

// Time Required for while loop

console.time( "Time Required for 'while' :===> " )

let i = 0
while ( i < 23 )
{
  console.log( i );
  i++
}

console.timeEnd( "Time Required for 'while' :===> " )
*/