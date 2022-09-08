// const prompt = require( "prompt-sync" )()

/*  Q1) Write a program using prompt function to take input of age as a value from the user and use   an alert to tell him if he can drive....
*/
/*
// Ans ===>

let age = prompt( "Enter your age =====> : " )

age = Number.parseInt( age )

// alert( age >= 18 ? "You can drive...!" : "You can't drive...!" )

age > 18 ? alert( "You can drive...!" ) : alert( "You can't drive...!" )

*/

/*

// Q2) In question 1 use confirm to ask the user if he wants to see the prompt again

// Ans ===>

// method-1

while ( true )
{

  if ( confirm( "Do you want to show prompt again...?" ) )
  {

    let age = prompt( "Enter your age =====> : " )

    age = Number.parseInt( age )

    age >= 18 ? alert( "You can drive...!" ) : alert( "You can't drive...!" )
  }
  else
  {
    break
  }


}

*/

/*
// method-2 combined solution for question-1 and question-2

const canDrive = ( age ) =>
{
  age >= 18 ? alert( "You can drive...!" ) : alert( "You can not drive...!" )
}

let runAgain = true

while ( runAgain )
{
  let age = prompt( "Enter your age ===> : " )
  age = Number.parseInt( age )
  console.log( typeof age );


  if ( canDrive( age ) )
  {
    console.log( typeof age );

  }
  else
  {
    runAgain = confirm( "Do you want to show prompt again...?" )
  }

}
*/
// Q3) In the previous question, use console.error to log the error if the age entered is negative.

// Ans ===>

/*

while ( true )
{
  if ( confirm( "Do you want to show prompt again...?" ) )
  {
    let age = prompt( "Enter your age =====> : " )

    age = Number.parseInt( age )

    if ( age < 0 )
    {
      console.error( "You have entered an invalid age.....😅" )
    }
    else
    {

      age > 18 ? alert( "You can drive...!" ) : alert( "You can't drive...!" )
    }
  }
  else
  {
    break
  }
}

*/

/*
Q4) Write a program to change the url to google.com (redirection) if user enters a
number greater than 4.
*/

/*

// Ans ===>



while ( true )
{
  if ( confirm( "Do you want to show prompt again...?" ) )
  {
    let inputNumber = prompt( "Enter A Number =====> : " )

    inputNumber = Number.parseInt( inputNumber )

    if ( inputNumber > 4 )
    {
      document.location.href = "https://www.google.com"
    }
    else
    {

      inputNumber < 4 ? alert( "You can cancel...!" ) : console.log( "Number is less than 4" );
    }
  }
  else
  {
    break
  }
}


// OR



location.href = "https://www.google.com"

*/
// OR

// let inputNumber = prompt( "Enter A Number : ===> " )

// inputNumber > 4 ? document.location.href = "https://www.google.com" : ""


// Q5) Change the background of the page to yellow or red or any other color based on the user input through prompt.

// let a = setInterval( () =>
// {

//   let backgroundColor = prompt( "Your expectation of background color  ===> : " )
//   backgroundColor ? document.body.style.backgroundColor = backgroundColor : ""
// }, 10000 );

// clearInterval( a )

// M.S solution

// keep changing background color continously

/*
  setInterval( () =>
            {

                randomColor = "#" + Math.floor( Math.random() * 16777215 ).toString( 16 );

            }, 1000 );

            console.log( randomColor, "random Color" );



            setInterval( () =>
            {

                document.body.style.backgroundColor = randomColor
            }, 1000 );  
*/





