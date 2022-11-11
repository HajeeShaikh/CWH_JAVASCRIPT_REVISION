// To add new personalized attribute you have to use data-<name of attribute>
let id = document.getElementById( "inOut" )
console.log( id.attributes )

// To check is there have searching attribute

console.log( id.hasAttribute( "class" ) )
console.log( id.hasAttribute( "style" ) )

// To set any attribute

let add = ( id.setAttribute( "style", "color:red" ) )
console.log( id.hasAttribute( "style" ) )

// To get value of an attribute

let get = id.getAttribute( "style" )
let get1 = id.getAttribute( "data-personal" )
console.log( get );
console.log( get1 );

// To Remove attribute

let remove = id.removeAttribute( "style" )
console.log( id.hasAttribute( "style" ) )


// To get all attributes

console.log( id.attributes, "Attributes" )

// For Accessing private attributes
let out = id.dataset

console.log( out );

// Simply we can access the value like getAttribute 

console.log( out.personal );
console.log( out.public ); 