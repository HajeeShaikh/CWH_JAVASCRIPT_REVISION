// If we ask something which is not available there in the code of JS then code execution will stop at error 
// To Avoid this we have to handle by using try and catch

try
{
    console.log( data );
} catch ( error )
{
    console.log( "Error is handled" );
}

