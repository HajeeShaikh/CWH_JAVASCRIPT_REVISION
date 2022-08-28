let Numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

let Names = [ "Sohail", "Arbaz", "Salman", "Saleem" ]
/*

// #] delete method

// It doesn't change the length of array

delete Numbers[ 3 ]

console.log( Numbers );



// #] concat() method

let ConcatedArray = Numbers.concat( Names )

console.log( ConcatedArray );


// #] sort() method

// It sort the items alphabetically and treats all the inputs as strings


let RandomNumbers = [ 123, 46, 4, 23, 234, 35, 56, 67, 2, 134, 452345, 656, 678, 98, 78, 7787 ]

RandomNumbers.sort()
console.log( RandomNumbers );


// To sort them in ascending or decending order we have to give an compare function to the sort.

// Ascending order

const compare = ( a, b ) =>
{
  return a - b
}
RandomNumbers.sort( compare )
console.log( RandomNumbers );

// Descending order

const compare1 = ( a, b ) =>
{
  return b - a
}
RandomNumbers.sort( compare1 )
console.log( RandomNumbers );

Names.sort( compare )
console.log( "Names Ascending Order:===>", Names );
Names.sort( compare1 )
console.log( "Names Descending Order:===>", Names );
Names.sort()
console.log( "Names Alphabetical Order:===>", Names );


// #] splice(<position_to_add>,<count_of_elements_to_remove>,<elements_to_be_added>) method

console.log( Numbers );

// Numbers.splice( 1, 4, [ 2, 4, 5 ] )
const deletedElements = Numbers.splice( 1, 4, 23232, 23234, 23235 ) // returns deleted elements and modifies the current array

console.log( Numbers );

console.log( deletedElements );


// #] slice(<start_slicing>,<end_slicing>) method => end_slicing - 1 will be the end item's index

// It doesn't modify the current array instead it gives new array

const slicedArray = Numbers.slice( 2 ) // without end prints upto end
const slicedArray2 = Numbers.slice( 2, 5 )

console.log( "CurrentArray:===> : ", Numbers );
console.log( "slicedArray1:===> ", slicedArray );
console.log( "slicedArray2:===> ", slicedArray2 );


// #] reverse() method

// It modifies the original array directly.

console.log( "OriginalArray:===> ", Numbers );
let ModifiedArray = Numbers.reverse()
console.log( "OriginalArrayAfter_reverse():===> ", Numbers );
console.log( "ModifiedArray", ModifiedArray );

*/