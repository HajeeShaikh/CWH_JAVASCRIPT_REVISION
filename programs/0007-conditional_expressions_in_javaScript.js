/*

const prompt = require( "prompt-sync" )();


let a = prompt( "What is your age...? ======>  " )

// The output of prompt is always a string....
console.log( a );
console.log( typeof a );

a = Number.parseInt( a )

console.log( a );
console.log( typeof a );

a = a.toString()

console.log( a );
console.log( typeof a );

a = Number.parseInt( a )


console.log( a );
console.log( typeof a, "last" );


// As in Python we can use( 13 > a > 0 ) like this but in JS it won't work We have to use && or || in JS

if ( a <= 0 )
{
  console.log( "Enter an valid age.....!" )
}

else if ( 13 > a && a > 0 )
{
  console.log( "You are a kid " )
}

else if ( 20 >= a && a >= 13 )
{
  console.log( "You are a teenager" )
}

else if ( 65 >= a && a >= 21 )
{
  console.log( "You are an adult" )
}

else
{
  console.log( "You are a senior citizen" )
}



// By using switch case:

const prompt = require( "prompt-sync" )();


let a = prompt( "What is your age...? ======>  " )

const b = Number.parseInt( a )

console.log( "Your Age is ==========> : ", b );



function youAre ( b )
{
  let output;

  switch ( true )
  {

    case b <= 0:
      output = ( "Enter A Valid Age" )
      break
    case b < 13 && b > 0:
      output = ( "You are a kid " )
      break
    case b <= 20 && b >= 13:
      output = ( "You are a teenager " )
      break
    case b <= 65 && b >= 21:
      output = ( "You are an adult" )
      break
    default:
      output = ( "You are a senior citizen" )
      break
  }
  return console.log( output );
}

const prompt = require( "prompt-sync" )();

let a = prompt( "What is your age...? ======>  " )

const b = Number.parseInt( a )


youAre( b )



// Trying out of the function

const prompt = require( "prompt-sync" )();

let a = prompt( "What is your age...? ======>  " )

const b = Number.parseInt( a )

switch ( b > 0 )
//  Here in switch apply such condition which will be always true or just simply pass true                              
{

  case b <= 0:
    console.log( "Enter A Valid Age" )
    break
  case b < 13 && b > 0:
    console.log( "You are a kid " )
    break
  case b <= 20 && b >= 13:
    console.log( "You are a teenager " )
    break
  case b <= 65 && b >= 21:
    console.log( "You are an adult" )
    break
  default:
    console.log( "You are a senior citizen" )
    break
}



// Ternary operator

let a = 20

let b = a < 4 ? "true" : "false";

console.log( b )

let c = a < 134 ? "true" : "false";

console.log( c, "a is", a, )

*/


