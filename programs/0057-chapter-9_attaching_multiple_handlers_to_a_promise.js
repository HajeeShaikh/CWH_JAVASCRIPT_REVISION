

const promise1 = new Promise( ( resolve, reject ) =>
{
    console.log("Promise is getting resolved, wait...........");
    setTimeout(() => {
        resolve( "Resolved in two seconds" )
        // reject(new Error("Something went wrong in promise resolution....!"))
    }, 2000);
} )

promise1.then( ( value ) =>
{
    console.log(value);
} ).catch( (error) =>
{
    console.log(error);
} )

promise1.then( (value) =>
{
    console.log(value.concat("~~~~~~~~~~_____~~~~~~~~~"));
} ).catch( ( error ) =>
{
    console.log( error );
} )