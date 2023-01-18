const p1 = new Promise( ( resolve, reject ) =>
{
    setTimeout(() => {
        console.log( "p1 resolved after 2 sec" );
        resolve(123)
    }, 2000);
} )

p1.then( ( value ) =>
{
    console.log( value );
    return new Promise( ( resolve, reject ) =>
    {
        setTimeout( () =>
        {
            console.log( "p1 second resolved after 2 sec" );
            resolve( 1234 )
        }, 2000 ); 
    })
} ).then( ( value ) =>
{
    console.log( "We are done...!" );
    return 2
} ).then( ( value ) =>
{
    console.log("final done");
})

// loadScript function writing double 

const loadScript = (src) =>
{
   return new Promise( ( resolve, reject ) =>
    {
        let script = document.createElement( "script" )
       script.src = src
       document.body.append( script )
       script.onload = () =>
       {
          resolve(1)
       }
       script.onerror = () =>
       {
           reject(0)
       }
} )
}

let prom1 = loadScript( "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" ) 

prom1.then( ( value ) =>
{
    console.log( value, "Script Loaded Successfully...!" );
    return loadScript( "https://cdnw.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" )
} ).then( ( value ) =>
{
    console.log( "Second Script loaded" );
} ).catch( ( error ) =>
{
    console.log(error,"Something is wrong with src");
})