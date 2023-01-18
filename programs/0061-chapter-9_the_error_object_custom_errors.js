try
{
    let age = prompt( "Enter Your Age: " )
    age = Number.parseInt( age )
    if ( age > 190 )
    {
        throw new ReferenceError( "Invalid Age" );
    }
} catch ( error )
{
    console.log( error.name );
    console.log( error.message );
    console.log( error.stack );
}

console.log( "Script is running....!" );