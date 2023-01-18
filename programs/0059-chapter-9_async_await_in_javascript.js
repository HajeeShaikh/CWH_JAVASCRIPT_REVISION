const asyncAwaitWeather = async () =>
{
    let udgirWeather = new Promise( ( resolve, reject ) =>
    {
        setTimeout( () =>
        {
            resolve( "13 Deg" );
        }, 3000 )
    } )


    let puneWeather = new Promise( ( resolve, reject ) => 
    {
        setTimeout( () =>
        {
            resolve( "15 Deg" );
        }, 7000 );
    } )
    console.log( "Please for 3 sec to get Udgir weather..." );
    let udgirW = await udgirWeather
    console.log( "Udgir weather is: ", udgirW )
    console.log( "Please for 7 sec to get Pune weather..." );
    let puneW = await puneWeather
    console.log( "Pune weather is: ", puneW )

    return [ udgirW, puneW ]
}

const fncn2 = async () =>
{
    console.log( "fncn 2 is here..." );
}



{
    // console.log( "Welcome to weather control room." );
    // let a = asyncAwaitWeather()
    // let b = fncn2()

    // Gives Unordered Output
    /* 
    Welcome to weather control room.
    0059-chapter-9_async_await_in_javascript.js:19 Please for 3 sec to get Udgir weather...
    0059-chapter-9_async_await_in_javascript.js:31 fncn 2 is here...
    0059-chapter-9_async_await_in_javascript.js:21 Udgir weather is:  13 Deg
    0059-chapter-9_async_await_in_javascript.js:22 Please for 7 sec to get Pune weather...
    0059-chapter-9_async_await_in_javascript.js:24 Pune weather is:  15 Deg
    */
}



{

    const combinedRun = async () =>
    {
        console.log( "Welcome to weather control room." );
        let a = await asyncAwaitWeather()
        let b = await fncn2()

    }

    combinedRun()

    // Gives Ordered Output (we can control flow by making async await )

    /*
    Welcome to weather control room.
    0059-chapter-9_async_await_in_javascript.js:19 Please for 3 sec to get Udgir weather...
    0059-chapter-9_async_await_in_javascript.js:21 Udgir weather is:  13 Deg
    0059-chapter-9_async_await_in_javascript.js:22 Please for 7 sec to get Pune weather...
    0059-chapter-9_async_await_in_javascript.js:24 Pune weather is:  15 Deg
    0059-chapter-9_async_await_in_javascript.js:31 fncn 2 is here...
    */
}