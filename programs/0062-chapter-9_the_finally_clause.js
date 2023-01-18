// finally clause runs in any condition whatever be the situation it will not care.

try
{
    let a = 10
    console.log( a + b );
} catch ( error )
{
    console.log( error );
}
finally
{
    console.log( "Finally Will Run In Any Conditions.....!" );
}