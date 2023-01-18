/*Q1) Write a program to load a JS file in a browser using promises use .then( ) to display 
 an alert when the load is complete */

// Ans ===> : 

// const loadScript = ( src ) =>
// {
//     return new Promise( ( resolve, reject ) =>
//     {
//         let script = document.createElement( 'script' )
//         script.src = src
//         document.body.append( script )
//         script.onload = () =>
//         {
//             resolve( "Script Loaded Successfully..........!" )
//         }
//         script.onerror = () =>
//         {
//             reject( new Error( "Error in Loading Script...." ) )
//         }
//     } )
// }

// let a = loadScript( "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" )
// a.then( ( result ) =>
// {
//     console.log( result );
// } )

// Q2) Solve Q1 using async_await.

// const loadScript = async ( src ) =>
// {
//     return new Promise( ( resolve, reject ) =>
//     {
//         let script = document.createElement( 'script' )
//         script.src = src
//         document.body.append( script )
//         script.onload = () =>
//         {
//             resolve( "Script Loaded Successfully..........!" )
//         }
//         script.onerror = () =>
//         {
//             reject( new Error( "Error in Loading Script...." ) )
//         }
//     } )
// }

// let main2 = () =>
// {
//     console.log( new Date().getMilliseconds() );
//     console.time( "Waited_for" );
//     let a = loadScript( "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" )
//     console.log( a );
//     console.timeEnd( "Waited_for" )
//     console.log( new Date().getMilliseconds() );

// }

// main2()

/* Q3) Create a promise which rejects after 3 sec use an async await to get its value 
use a try catch to handle its error */

// let promise = () =>
// {
//     return new Promise( ( resolve, reject ) =>
//     {
//         setTimeout( () =>
//         {
//             reject( new Error( "Rejected After 3 Seconds..." ) )
//         }, 3000 );
//     } )
// }

// let main3 = async () =>
// {
//     try
//     {
//         let a = await promise()
//         console.log( a );

//     } catch ( error )
//     {
//         console.log( error );
//     }
// }

// main3()

/* Q4) write a program using Promise.all() inside an async await to await three promises.
 Compare its results with the case where await these promises one by one. */


const p1 = async () =>
{
    return new Promise( ( resolve, reject ) =>
    {
        setTimeout( () =>
        {
            resolve( "Promise 1 resolved" )
        }, 2000 );
    } )
}
const p2 = async () =>
{
    return new Promise( ( resolve, reject ) =>
    {
        setTimeout( () =>
        {
            resolve( "Promise 2 resolved" )
        }, 1000 );
    } )
}
const p3 = async () =>
{
    return new Promise( ( resolve, reject ) =>
    {
        setTimeout( () =>
        {
            resolve( "Promise 3 resolved" )
        }, 3000 );
    } )
}

const runSingles = async () =>
{
    console.time( "runSingles" );
    let a1 = await p1()
    let a2 = await p2()
    let a3 = await p3()
    console.log( a1, a2, a3 );
    console.timeEnd( "runSingles" )
}
runSingles()

const MultipleRun = async () =>
{
    // Here Instead of making await to one by one only making await for allRun
    // Here time will get reduced due to parallel running of all promises
    // And time will be nearly equal to the max time in the program (i.e. who will be last in Promise.race)

    console.time( "MultipleRun" );
    let a1 = p1()  // Await removed
    let a2 = p2()
    let a3 = p3()
    let allRun = await Promise.all( [ a1, a2, a3 ] )
    console.log( allRun );
    console.timeEnd( "MultipleRun" )
}

MultipleRun()