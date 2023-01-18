let promise = new Promise( function( resolve, reject ) 
{
    alert( "Hello" )
    resolve( 99.99 )
    
} )

console.log( "Hello One" );

setTimeout(() => {
    console.log( "Hello Two in 2 Sec" );

}, 2000 );

console.log( "Hello Three" );
console.log(promise);