// const prompt = require("prompt-sync")()

/* Q) Use JavaScript to create a game of snake , water and gun. The game should ask you to 
    enter "S","W" or "G". The computer should be able to randomly generate "S" , "W" or "G" and declare 
    win or loss using alert. Use confirm and prompt wherever required.
*/

// Ans===>

randomNumberGenerator ( max ) 
{
  return Math.floor( Math.random() * max );
}



// console.log( number );
// console.log( randomAlphabet );






  while ( confirm( "Do you want to play again...?" ) )
  {

    let alphabets = [ "S", "W", "G" ]

    let number = randomNumberGenerator( 3 );

    let randomAlphabet = alphabets[ number ]
    let userAlphabet = prompt( "Enter Any Alphabet Among 'S','W' or 'G' =====> : " )

    console.log( "Random Number =====> : ", number );
    console.log( "userAlphabet Alphabet =====> : ", userAlphabet );
    console.log( "randomAlphabet Alphabet =====> : ", randomAlphabet );

    if ( randomAlphabet === userAlphabet )
    {

      console.log( "You Win" );
      alert( "You Win" );

    }
    else if ( randomAlphabet !== userAlphabet )
    {

      // SW, WS, SG, GS, WG, GW

      let result = randomAlphabet + userAlphabet
      if ( result === "SW" || result === "Sw" )
      {
        console.log( "You loss" )
        alert( "You loss" )

      }
      else if ( result === "WS" || result === "Ws" )
      {
        console.log( "You Won" )
        alert( "You Won" )

      }
      else if ( result === "SG" || result === "Sg" )
      {
        console.log( "You Won" )
        alert( "You Won" )


      }
      else if ( result === "GS" || result === "Gs" )
      {
        console.log( "You Loss" )
        alert( "You Loss" )

      }
      else if ( result === "WG" || result === "Wg" )
      {
        console.log( "You Loss" )
        alert( "You Loss" )

      }
      else if ( result === "GW" || result === "Gw" )
      {
        console.log( "You Won" )
        alert( "You Won" )

      }
    }


  }



