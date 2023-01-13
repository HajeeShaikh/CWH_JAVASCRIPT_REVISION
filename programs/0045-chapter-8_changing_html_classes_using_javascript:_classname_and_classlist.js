let first = document.getElementById( 'first' )


// Directly replace all the classes present 
// first.className = "text-red-600 bg-yellow-400"

// to get list (array) of all classes
console.log( first.classList );

// Adding Class Dynamically

// only one class can be added at one time.
// first.classList.add( "text-red-600" )
// only one class can be added at one time.
// first.classList.add( "bg-green-600" )

// removing class

first.classList.remove("underline")

// toggling class

first.classList.toggle("underline")










