// syntax-------------> setInterval|| setTimeout ( function, delay_in_ms, arguments )

// setTimeout

let a = prompt( "Enter First Number : " )
a = Number.parseFloat( a )
let b = prompt( "Enter Second Number : " )
b = Number.parseFloat( b )
let c = prompt( "Enter Third Number : " )
c = Number.parseFloat( c )


// const sumInAlertBox = ( a, b, c ) =>
// {
//     if ( typeof a === "number" && typeof b === "number" && typeof c === "number" )
//     {
//         alert( `Sum of your numbers is : ${a + b + c}` )
//     } else
//     {
//         alert( "Enter Valid Numbers..........!!!" )
//     }
// }


// const setTimeout_Old = setTimeout( sumInAlertBox, 2000, a, b, c );

// clearTimeout(setTimeout_Old)


// const checkNewSyntax_setTimeout = setTimeout( ( a, b, c ) =>
// {
//             alert( `Sum of your numbers is : ${a + b + c}` )

// }, 2000, a, b, c ) 

// setInterval

const setInterval_Old = setInterval( sumInAlertBox, 2000, a, b, c );

clearTimeout(setInterval_Old)

const checkNewSyntax_setInterval = setInterval( ( a, b, c ) =>
{
    alert( `Sum of your numbers is : ${ a + b + c }` )

}, 2000, a, b, c ) 

clearInterval( checkNewSyntax_setInterval )