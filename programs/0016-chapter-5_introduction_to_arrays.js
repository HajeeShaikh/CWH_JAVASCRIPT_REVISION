/* 
const NN_SS_BB_U = [ 75, null, "Saleem", Symbol( "S" ), BigInt( 345 ), true, undefined ]
console.log( NN_SS_BB_U );

NN_SS_BB_U[ 2 ] = "Hajee" // Changing the item

NN_SS_BB_U[ NN_SS_BB_U.length ] = false // Ading the item

console.log( NN_SS_BB_U );

// Hence arrays are mutable
// Accessing Arrays item using for-of loop

for ( let item of NN_SS_BB_U )
{
  console.log( "Using for-of loop:===> ", item, " \n" );
}

console.log( "===================================================================" );

// Accessing Arrays item using for-in loop

for ( let item in NN_SS_BB_U )
{
  console.log( "Using for-in loop:===> ", NN_SS_BB_U[ item ], " \n" );
}
console.log( "===================================================================" );

// Accessing using for loop


for ( let item = 0; item < NN_SS_BB_U.length; item++ )
{
  console.log( "Using for loop:===> ", NN_SS_BB_U[ item ], " \n" );
}

console.log( "===================================================================" );
// Accessing using index


console.log( "Length", NN_SS_BB_U.length, " \n" );
console.log( "Type", typeof NN_SS_BB_U, " \n" );
console.log( "Using index", NN_SS_BB_U[ 0 ] );
console.log( "Using index", NN_SS_BB_U[ 1 ] );
console.log( "Using index", NN_SS_BB_U[ 2 ] );
console.log( "Using index", NN_SS_BB_U[ 3 ] );
console.log( "Using index", NN_SS_BB_U[ 4 ] );
console.log( "Using index", NN_SS_BB_U[ 5 ] );
console.log( "Using index", NN_SS_BB_U[ 6 ] );
*/