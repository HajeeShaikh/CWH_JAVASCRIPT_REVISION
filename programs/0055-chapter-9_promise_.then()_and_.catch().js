// All promises get executed parallelly

const promise1 = new Promise(( resolve, reject ) =>
{
    console.log( "promise1 is pending" );
    setTimeout(() => {
        resolve("promise1 one is resolved")
    }, 5000);
})

const promise2 = new Promise(( resolve, reject ) =>
{
    console.log( "promise2 is pending" );
    setTimeout( () =>
    {
        reject( new Error( "Something error occured in promise2" ) )
    }, 5000);
})

// console.log( promise1, promise2 );

promise1.then( (value) =>
{
    console.log(value);
})

promise2.catch( ( error ) =>
{
    console.log(error);
})
