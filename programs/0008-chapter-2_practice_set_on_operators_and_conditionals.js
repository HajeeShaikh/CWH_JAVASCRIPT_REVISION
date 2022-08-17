const prompt = require( "prompt-sync" )();

/*

// Q1) Use logical operator to find whether the age of a person lies between 10 and 20.

// Answer ===>

// Using if else


let age = prompt( "Enter Your Age =====> : " )
age = parseInt( age )

if ( ( age > 10 ) && ( age < 20 ) )
{
  console.log( "Your age lies in between 10 and 20" );
} else
{
  console.log( "Out of Range 20>age>10" );
}



// Using switch case

let age = prompt( "Enter Your Age =====> : " )

switch ( true )
{
  case ( ( age > 10 ) && ( age < 20 ) ):

    console.log( "Your age lies in between 10 and 20" );

    break;

  default:
    console.log( "Out of Range 20>age>10" );
    break;
}

*/

/*

// Q2) Demonstrate the use of switch case statement in JavaScript.

Answer ===>

let age = prompt( "Enter Your Age =====> : " )
age = parseInt( age )

switch ( true )
{
  case age <= 0:
    console.log( "Enter a valid age" );
    break;

  case age < 18:
    console.log( "You can't drive" );
    break;

  case age > 18:
    console.log( "You can drive" );
    break;
  default:
    console.log( "Don't worry be Happy" );
    break;
}

*/

/*

// Q3) Write a JavaScript program to find whether the number is divisible by 2 & 3.

// Answer ===>

// Using if else

let number = prompt( "Enter Your number =====> : " )
number = parseInt( number )

if ( ( number % 2 == 0 ) && ( number % 3 == 0 ) )
{
  console.log( "Number is divisible by 2 & 3" );
}
else if ( ( number % 2 == 0 ) && ( number % 3 != 0 ) )
{
  console.log( "Number is divisible by 2 but not by 3" );
}
else
{
  console.log( "Number is divisible by 3 not by 2" )
}


// Using Switch case

let number = prompt( "Enter Your number =====> : " )
number = parseInt( number )

switch ( true )
{
  case ( ( number % 2 == 0 ) && ( number % 3 == 0 ) ):
    console.log( "Number is divisible by 2 & 3" )
    break;
  case ( ( number % 2 == 0 ) && ( number % 3 != 0 ) ):
    console.log( "Number is divisible by 2 but not by 3" )
    break;

  default:
    console.log( "Number is divisible by 3 not by 2" )
    break;
}

*/

/*

// Q4) Write a JavaScript program to find whether the number is divisible by either 2 or 3.

// Answer ===>

// Using if else

let number = prompt( "Enter Your number =====> : " )
number = parseInt( number )

if ( ( number % 2 == 0 ) )
{
  console.log( "Number is divisible by 2 " );
}
else if ( ( number % 3 == 0 ) )
{
  console.log( "Number is divisible by 3" );
}
else
{
  return ( ( number % 2 == 0 ) || ( number % 3 == 0 ) )
}


// Using Switch case

let number = prompt( "Enter Your number =====> : " )
number = parseFloat( number )

switch ( true )
{
  case ( ( number % 2 == 0 ) || ( number % 3 == 0 ) ):
    console.log( "True" )
    break;

  default:
    console.log( "False" )
    break;
}

*/

/*

// Q5) Print "You can drive" or "You can't drive" based on age being greater than 18 using ternary operator.

let age = prompt( "Enter Your Age =====> : " )
age = parseInt( age )

age > 18 ? console.log( "You can drive" ) : console.log( "You can't drive" )

*/