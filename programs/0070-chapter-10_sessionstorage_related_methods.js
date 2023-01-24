// sessionStorage.setItem( "First Name", "Hajee" )
// sessionStorage.setItem( "Last Name", "Shaikh" )
// sessionStorage.setItem( "Middle Name", "Gausodeen" )
// sessionStorage.setItem( "Qualification", "Bachelor of Engineering" )
// sessionStorage.setItem( "City", "Udgir" )

// if ( sessionStorage.length < 18 )
// {

//     var key = prompt( "Enter Key To Add : " )
//     var value = prompt( "Enter Value To Add : " )
// }
// else
// {
//     var key = prompt( "To Clear=> 0 / To Keep => 1 : " )
//     if ( key == 0 )
//     {
//         sessionStorage.clear()
//     }
// }
// sessionStorage.setItem( `${ key }`, `${ value }` )

// if ( key == 0 )
// {
//     sessionStorage.clear()
// }

// if ( key == 1 )
// {
//     sessionStorage.removeItem( "City" )
//     sessionStorage.removeItem( "1" )
// }

// if ( key == "null" )
// {
//     sessionStorage.removeItem( "null" )
// }

// let a = sessionStorage.getItem( key )
// let b = sessionStorage.getItem( value )

// console.log( `The added key is "${ key }" and the value is "${ value }"` );

// console.log( sessionStorage.key( 0 ), "<---------------To Check The Value at A Particular Index." );

// console.log( sessionStorage.length, "<---------------To Check The Length of Local Storage." );

// // Instead of 'setItem' we can use like below :- 

// sessionStorage.Apsis = "Bangladesh"

// sessionStorage[ "Favourite Color" ] = "White"


// Storage Event 

localStorage.clear()
localStorage[ "Name" ] = "Hajee"


window.onstorage = ( e ) =>
{
    alert( "Changed" )
    console.log( e, "----------------------------------------------------------" );
}