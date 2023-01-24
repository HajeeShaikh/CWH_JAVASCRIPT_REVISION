localStorage.setItem( "First Name", "Hajee" )
localStorage.setItem( "Last Name", "Shaikh" )
localStorage.setItem( "Middle Name", "Gausodeen" )
localStorage.setItem( "Qualification", "Bachelor of Engineering" )
localStorage.setItem( "City", "Udgir" )

if ( localStorage.length < 8 )
{

    var key = prompt( "Enter Key To Add : " )
    var value = prompt( "Enter Value To Add : " )
}
else
{
    var key = prompt( "To Clear=> 0 / To Keep => 1 : " )
    if ( key == 0 )
    {
        localStorage.clear()
    }
}
localStorage.setItem( `${ key }`, `${ value }` )

if ( key == 0 )
{
    localStorage.clear()
}

if ( key == 1 )
{
    localStorage.removeItem( "City" )
    localStorage.removeItem( "1" )
}

if ( key == "null" )
{
    localStorage.removeItem( "null" )
}

let a = localStorage.getItem( key )
let b = localStorage.getItem( value )

console.log( `The added key is "${ key }" and the value is "${ value }"` );

console.log( localStorage.key( 0 ), "<---------------To Check The Value at A Particular Index." );

console.log( localStorage.length, "<---------------To Check The Length of Local Storage." );

// Instead of 'setItem' we can use like below :- 

localStorage.Apsis = "Bangladesh"

localStorage[ "Favourite Color" ] = "White"