const promise1 = new Promise( ( resolve, reject ) =>
{
    setTimeout(() => {
        resolve( "Resolved in one second" );
        }, 1000);
} )
const promise2 = new Promise( ( resolve, reject ) =>
{
    setTimeout(() => {
        resolve( "Resolved in two second" );
        }, 2000);
} )
const promise3 = new Promise( ( resolve, reject ) =>
{
    setTimeout(() => {
        resolve( "Resolved in three second" );
        }, 3000);
} )
const promise4 = new Promise( ( resolve, reject ) =>
{
    setTimeout(() => {
        resolve( "Resolved in four second" );
        }, 4000);
} )
const promise5 = new Promise( ( resolve, reject ) =>
{
    setTimeout(() => {
        // resolve( "Resolved in five second" );
        reject( "Rejected" );
        }, 5000);
} )
const promise6 = new Promise( ( resolve, reject ) =>
{
    setTimeout(() => {
        resolve( "Resolved in six second" );
        }, 6000);
})

// There are six static methods of Promise class

// 1) Promise.all (condition all should be resolved)

// let allPromiseResult = Promise.all( [ promise1, promise2, promise3, promise4, promise5, promise6 ] )
// allPromiseResult.then( ( value ) =>
// {
//     console.log(value);
// })

// 2) Promise.allSettled (no need of all resolved)

// let allPromiseResult = Promise.allSettled( [ promise1, promise2, promise3, promise4, promise5, promise6 ] )
// allPromiseResult.then( ( value ) =>
// {
//     console.log(value);
// })

// 3) Promise.race() (gives the fastest resolved/rejected promise)

// let allPromiseResult = Promise.race( [ promise1, promise2, promise3, promise4, promise5, promise6 ] )
// allPromiseResult.then( ( value ) =>
// {
//     console.log(value);
// } )

// 4) Promise.any()( gives the fastest resolved promise )

// let allPromiseResult = Promise.any( [ promise1, promise2, promise3, promise4, promise5, promise6 ] )
// allPromiseResult.then( ( value ) =>
// {
//     console.log(value);
// })

// 5) Promise.resolve() ( gives resolved promise )

// let resolvedPromise = Promise.resolve( true )
// resolvedPromise.then( ( value ) =>
// {
//     console.log(value);
// } )

// 6) Promise.reject() ( gives resolved promise )

// let rejectedPromise = Promise.reject( false )
// rejectedPromise.then( ( value ) =>
// {
//     console.log(value);
// } ).catch( ( error ) =>
// {
//     console.log(error);
// })