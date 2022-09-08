
const prompt = require( "prompt-sync" )()

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: [ "Pizza", "Coding", "Brownie Points" ],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: [ "Hogwarts", "Magic", "Hagrid" ],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: [ "Intriguing Cases", "Violin" ],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: [ "JavaScript", "Gaming", "Foxes" ],
  },
];


// let name = prompt( "Enter a name =====> : " )
// let prop = prompt( "Enter a property =====> : " )





function isNameExist ( name )
{
  for ( var a = 0; a < contacts.length; a++ )
  {
    if ( contacts[ a ].firstName == name )
      return true
  }
  return false;
}

function isPropertyExist ( prop )
{
  for ( var a = 0; a < contacts.length; a++ )
  {
    if ( contacts[ a ].hasOwnProperty( prop ) )
      return true
  }
  return false;
}

function lookUpProfile ( name, prop )
{
  // Only change code below this line

  if ( !isNameExist( name ) )
  {
    return "No such contact";
  } else if ( !isPropertyExist( prop ) )
  {
    return "No such property";
  }

  for ( var a = 0; a < contacts.length; a++ )
  {
    if ( contacts[ a ].firstName == name && contacts[ a ].hasOwnProperty( prop ) )
    {
      return contacts[ a ][ prop ];
    }
  }
}
// Only change code above this line

console.log( lookUpProfile( "Akira", "likes" ) );
console.log( lookUpProfile( "Kristian", "lastName" ) );
console.log( lookUpProfile( "Sherlock", "likes" ) );
console.log( lookUpProfile( "Harry", "likes" ) );
console.log( lookUpProfile( "Bob", "number" ) );
console.log( lookUpProfile( "Bob", "potato" ) );
console.log( lookUpProfile( "Akira", "address" ) );

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


