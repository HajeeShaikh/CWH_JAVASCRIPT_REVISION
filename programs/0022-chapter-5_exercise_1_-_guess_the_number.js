// Exercise Question - 1

/* Write a program to generate a random number and store it in a variable. 
The program then takes an input from the user to tell them whether the guess was 
correct, greater or lesser than the original number.

100-(number of guesses) is the score of the user the program is expected to terminate 
once the number is guessed.

Number Should be between 1-100
 */

/* 

// Ans===>

const prompt = require( "prompt-sync" )()

const randomNumGenerator = ( max ) =>
{
  return Math.floor( Math.random() * max )
}

let randomNumber = randomNumGenerator( 100 )

console.log( "randomNumber:===> ", randomNumber );

let guessNumber;
let attemptCounter = 0

while ( randomNumber != guessNumber )
{
  guessNumber = prompt( "Guess A Number:===> " )
  if ( randomNumber < guessNumber )
  {
    console.log( "Your guess is bigger" );
    attemptCounter++
  }
  else if ( randomNumber > guessNumber )
  {
    console.log( "Your guess is smaller" );
    attemptCounter++
  } else if ( randomNumber == guessNumber )
  {
    console.log( "Your guess is correct; Congratulations....!" );
    attemptCounter++
  }

}

console.log( "You have guessed the random number in ", attemptCounter, "attempt/s." );
console.log( "Your score is:===> ", ( 100 - attemptCounter ), "...!" );
*/

// Try for dynamic solution/hacking....!

const prompt = require( "prompt-sync" )()

const randomNumGenerator = ( max ) =>
{
  return Math.floor( Math.random() * max )
}

let randomNumber = randomNumGenerator( 100 )

console.log( "randomNumber:===> ", randomNumber );

let checkArray = []
let attemptCounter1 = 0
// let guessNumberNew = prompt( "Guess A Number:===> " )

for ( let i = 0; i <= 100; i++ )
{
  checkArray.push( i )
}

/* 

// shortcut to find the random number without getting prompt

console.log( checkArray.indexOf( randomNumber ) );

// End of shortcut

*/

for ( let number of checkArray )
{

  if ( number < randomNumber )
  {
    console.log( "Your guess is smaller" );
    attemptCounter1++
    if ( number > randomNumber )
    {
      console.log( "Your guess is bigger" );
      attemptCounter1++
    }
  }
  if ( number == randomNumber )
  {
    console.log( "Your guess is correct; Congratulations" );
    attemptCounter1++

  }

}

console.log( "You have guessed the random number in ", attemptCounter1, "attempt/s." );
console.log( "Your score is:===> ", ( 100 - attemptCounter1 ), "...!" );