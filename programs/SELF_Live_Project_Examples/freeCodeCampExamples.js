// let obj =
// {
//   2: "II",
//   3: "III",
//   4: "IV",
//   5: "V",
//   9: "IX",
//   12: "XII",
//   16: "XVI",
//   29: "XXIX",
//   44: "XLIV",
//   45: "XLV",
//   68: "LXVIII",
//   83: "LXXXIII",
//   97: "XCVII",
//   99: "XCIX",
//   400: "CD",
//   500: "D",
//   501: "DI",
//   649: "DCXLIX",
//   798: "DCCXCVIII",
//   891: "DCCCXCI",
//   1000: "M",
//   1004: "MIV",
//   1006: "MVI",
//   1023: "MXXIII",
//   2014: "MMXIV",
//   3999: "MMMCMXCIX"
// }


// console.log( obj[ 3999 ] );
// console.log( Object.values( obj ) );


// for ( let i of Object.keys( obj ) )
// {
//   console.log( obj[ Object.keys( obj ) ] );
// }

// function convertToRoman ( num )
// {
//   console.log( obj[ num ] );
// }

// convertToRoman( 10 );


/*

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

Tests
Waiting:rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP
Waiting:rot13("SERR CVMMN!") should decode to the string FREE PIZZA!
Waiting:rot13("SERR YBIR?") should decode to the string FREE LOVE?
Waiting:rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

*/

let Alphabets = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]



let input = "GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."
let output = []

let newAlphabets = [ ...Alphabets, ...Alphabets ]





for ( let i of input.toUpperCase() )
{
  if ( i !== " " )
  {

    output.push( newAlphabets[ newAlphabets.indexOf( i ) + 13 ] );
  }
  if ( ( i === " " ) || ( i === "!" ) || ( i === "?" ) || ( i === "." ) )
  {
    output.push( i )
  }
}

let reg = [ "!", "?", ",", "." ]
// console.log( output.join( "" ).slice );
// console.log( output.join( "" ) );




if ( output.includes( "?" ) )
{


  output.splice( ( output.length - 2 ), 1 ).join( "" )
  console.log( output.join( "" ), "first" );
}
else if ( output.includes( "!" ) )
{

  output.splice( ( output.length - 2 ), 1 ).join( "" )
  console.log( output.join( "" ), "first1" );
}
else if ( output.includes( "." ) )
{

  output.splice( ( output.length - 2 ), 1 ).join( "" )
  console.log( output.join( "" ), "first1" );
}

else
{
  console.log( output.join( "" ), "second" );

}


// Mobile no. validator problem : 

var re = /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;

function telephoneCheck ( str )
{
  return re.test( str );
}

telephoneCheck( "555-555-5555" );



