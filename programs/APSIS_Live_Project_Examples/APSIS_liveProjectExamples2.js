// Promises

// 3 States

// a) pending
// b) resolved
// c) rejected

const PromObject = new Promise( ( resolve, reject ) =>
{

 setTimeout( () =>
 {

  let roll_no = [ 1, 2, 3, 4 ]
  resolve( roll_no )
  // reject( "Error while resolving" )
 }, 2000 );

} )

PromObject.then( ( rollno ) =>
{
 console.log( rollno )
} ).catch( ( error ) =>
{
 console.log( error )
} )