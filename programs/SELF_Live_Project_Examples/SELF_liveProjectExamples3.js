/*
function intersection ( setA, setB )
{
  const intersection = new Set();
  for ( const elem of setB )
  {
    if ( setA.has( elem ) )
    {
      intersection.add( elem );
    }
  }
  return intersection;
}


function smallestCommons ( arr )
{
  let a = [ ...arr ]
  let min = Math.min( ...a )
  let max = Math.max( ...a )

  let givenArray = []
  let maxArray = []

  for ( let i = min; i <= max; i++ )
  {
    givenArray.push( i )
  }

  let multiple = givenArray.reduce( ( a, b ) =>
  {
    return a * b
  }, 1 )

  for ( let i = max; i < multiple; i = i + max )
  {
    let divisible = givenArray.every( ( num ) =>
    {
      return i % num === 0
    } )
    if ( divisible )
    {
      return i
    }
  }

  */
/*
  let nestedArray = givenArray.map( ( item ) =>
  {
    return [ item ]
  } )
 
  let multiplierArray = []
 
 
  for ( let i = 1; i <= 999999; i++ )
  {
    multiplierArray.push( i )
  }
 
  // console.log( multiplierArray, "multiplierArray" )
 
  let avr = []
 
  let ax = nestedArray.map( ( num ) =>
  {
    // console.log( num, "num" )
    multiplierArray.map( ( item ) =>
    {
      // console.log( item )
      avr.push( num * item )
    } )
 
  } )
 
  // console.log( avr, "ax" )
 
  let newA = []
 
  for ( let i = 0; i < avr.length; i + 999999 )
  {
    newA.push( avr.splice( i, 999999 ) )
  }
 
  // console.log( newA, "--------" )
 
  // console.log( newA.length )
 
 
  let newAm = newA.map( ( item ) =>
  {
    return ( new Set( item ) )
  } )
 
  // creating sets for all the elements of given array 
 
  // console.log( newAm );
 
  let aq1 = intersection( newAm[ 0 ], newAm[ 1 ] )
  console.log( aq1, "A^B" )
  let aq2 = intersection( aq1, newAm[ 2 ] )
  console.log( aq2, "A^B^C" )
  let aq3 = intersection( aq2, ( newAm[ 3 ] ) )
  console.log( aq3, "A^B^C^D" )
  let aq4 = intersection( aq3, ( newAm[ 4 ] ) )
  console.log( aq4, "A^B^C^D^E" )
  let aq5 = intersection( aq4, ( newAm[ 5 ] ) )
  console.log( aq5, "A^B^C^D^E^F" )
 
 
}
 
// smallestCommons( [ 1, 5 ] );
smallestCommons( [ 1, 13 ] )
 
}
*/
// console.log( smallestCommons( [ 23, 18 ] ) );


// Problem 2 


// function addTogether ( ...arg )
// {
//   console.log( arguments.length )

//   if ( arguments.length == 2 )
//   {
//     return arguments[ 0 ] + arguments[ 1 ]
//   }
//   else if ( arguments.length == 1 )
//   {
//     function addTogether ( ...arg )
//     {
//       return arg.reduce( ( a, b ) =>
//       {
//         return a + b
//       } )
//     }


//   }

// }

// addTogether( 2 );


// freeCodeCamp Examples 



// const prompt = require( "prompt-sync" )()

// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: [ "Pizza", "Coding", "Brownie Points" ],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: [ "Hogwarts", "Magic", "Hagrid" ],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: [ "Intriguing Cases", "Violin" ],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: [ "JavaScript", "Gaming", "Foxes" ],
//   },
// ];


// let name = prompt( "Enter a name =====> : " )
// let prop = prompt( "Enter a property =====> : " )





// function isNameExist ( name )
// {
//   for ( var a = 0; a < contacts.length; a++ )
//   {
//     if ( contacts[ a ].firstName == name )
//       return true
//   }
//   return false;
// }

// function isPropertyExist ( prop )
// {
//   for ( var a = 0; a < contacts.length; a++ )
//   {
//     if ( contacts[ a ].hasOwnProperty( prop ) )
//       return true
//   }
//   return false;
// }

// function lookUpProfile ( name, prop )
// {
// Only change code below this line

//   if ( !isNameExist( name ) )
//   {
//     return "No such contact";
//   } else if ( !isPropertyExist( prop ) )
//   {
//     return "No such property";
//   }

//   for ( var a = 0; a < contacts.length; a++ )
//   {
//     if ( contacts[ a ].firstName == name && contacts[ a ].hasOwnProperty( prop ) )
//     {
//       return contacts[ a ][ prop ];
//     }
//   }
// }
// Only change code above this line

// console.log( lookUpProfile( "Akira", "likes" ) );
// console.log( lookUpProfile( "Kristian", "lastName" ) );
// console.log( lookUpProfile( "Sherlock", "likes" ) );
// console.log( lookUpProfile( "Harry", "likes" ) );
// console.log( lookUpProfile( "Bob", "number" ) );
// console.log( lookUpProfile( "Bob", "potato" ) );
// console.log( lookUpProfile( "Akira", "address" ) );

// lookUpProfile( name, "likes" )



// else if ( name !== contacts[ index ][ keys ] )
// {
//   if ( name !== contacts[ index ][ keys ] )
//   {

//     console.log( "No such contact" );
//   }
//   if ( prop !== contacts[ index ].hasOwnProperty( prop ) )
//   {
//     console.log( "No such property" );
//   }


// }


/*
 
 
for ( let i = 0; i < contacts.length; i++ )
{
 
  for ( let keys in ( contacts[ i ] ) )
  {
    console.log( `${ keys }: ${ ( contacts[ i ][ keys ] ) }` );
  }
  console.log( contacts[ i ].likes );
}
 
*/

// if name == contacts firstname && prop == prop of contacts 

// return value(prop)


// if name != in contacts => No such contact


// if prop != in contacts => No such property


// let jokes = [ `Why did an old man fall in a well?
// Because he couldn’t see that well!`,

//   `Why did the actor fall through the floorboards?
// They were going through a stage!`,

//   `Why did a scarecrow win a Nobel prize?
// He was outstanding in his field!`,

//   `Why are peppers the best at archery?
// Because they habanero!`,

//   `What did the duck say after she bought chapstick?
// Put it on my bill!`,

//   `What do you call a fake noodle?
// An impasta!`,

//   `What did the three-legged dog say when he walked into a saloon?
// “I’m looking for the man who shot my paw!”`,

//   `How do you tell the difference between a bull and a cow?
// It is either one or the udder!`,

//   `What’s red and smells like blue paint?
// Red paint!`,

//   `What’s the difference between a hippo and a Zippo?
// One is very heavy, the other is a little lighter!`,
  
// `  What do you call an illegally parked frog ?
//   Toad!`,

// `Why can’t you send a duck to space ?
//   Because the bill would be astronomical!`,

// `What does Jeff Bezos do before he goes to sleep ?
//   He puts his PJ - Amazon!`,

// `What happened when the world's tongue-twister champion got arrested?
// They gave him a tough sentence!`,

// `What did the mama cow say to the calf ?
//   It’s pasture bedtime!`,

// `How does a vampire start a letter ?
//   Tomb it may concern!`,

// `What did one plate say to the other ?
//   Dinner is on me!`,

// `Why do hummingbirds hum ?
//   Because they don’t know the words!`,

// `What do sprinters eat before a race ?
//   Nothing.They fast!`,

// `Two muffins are baking in an oven.One of them looks to the other and says, 
// "Phew, it's getting hot in here!" 
// The other looks back and says, 
// "Ack! A talking muffin!"`
// ]

// console.log( jokes[ 0 ] );