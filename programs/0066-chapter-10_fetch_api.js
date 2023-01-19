let city = prompt( "Enter City Name: " )

let p = fetch( `https://goweather.herokuapp.com/weather/${ city }` )


p.then( ( response ) =>
{
    console.log( response.status );
    console.log( response.ok );
    console.log( response.headers );
    console.log( response.blob );
    return response.json()
} )
    .then( ( response ) =>
    {
        console.log( response );
    } )

    .catch( ( error ) =>
    {
        console.log( error );
    } )


