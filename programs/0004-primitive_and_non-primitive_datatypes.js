// Data Types in JS

// 1) Primitive Data Type

// NN SS BB U

// let a = null

// console.log( `${ a }, it's type is ${ typeof a }` );

// let b = 234

// console.log( `${ b }, it's type is ${ typeof b }` );

// let c = "India"

// console.log( `${ c }, it's type is ${ typeof c }` );

// let d = Symbol( "This is a Symbol" )

// // console.log( `${ d }, it's type is ${ typeof d }` );   // throw error  Cannot convert a Symbol value to a string

// console.log( d );
// console.log( typeof d )

// let e = BigInt( "1234" ) + BigInt( "876543" )


// console.log( `${ e }, it's type is ${ typeof e }` );

// let f = true

// console.log( `${ f }, it's type is ${ typeof f }` );

// let g

// console.log( `${ g }, it's type is ${ typeof g }` );



// 2) Non-Primitive Data Type 

// Objects

// const Mobile = {

//     RedMi: 12345,
//     Samsung: 23457,
//     Realme: 65454,
//     iPhone: 2345432,
//     Nokia: 54333,
//     Vivo: 54345


// }

// console.log( Mobile.RedMi, ">===============> Redmi mobile" );

// console.log( Mobile[ "RedMi" ], ">===============> Redmi mobile" );

// console.log( Mobile.Nokia, ">===============> Nokia mobile" );

// console.log( Mobile[ "Nokia" ], ">===============> Nokia mobile" );


// const Mobile2 = {
//     "RedMi": 12345,
//     "Samsung": 23457,
//     "Realme": 65454,
//     "iPhone": 2345432,
//     "Nokia": 54333,
//     "Vivo": 54345
// }


// console.log( Mobile2.RedMi, ">===============> Redmi mobile2" );

// console.log( Mobile2[ "RedMi" ], ">===============> Redmi mobile2" );

// console.log( Mobile2.Nokia, ">===============> Nokia mobile2" );

// console.log( Mobile2[ "Nokia" ], ">===============> Nokia mobile2" );

// console.log( `${ Mobile }, it's type is ${ typeof Mobile }` );  // result is like this but we don't want this type => [object Object], it's type is object Because we are directly try

// Displaying Object

// Object to String

// let h = JSON.stringify( Mobile )

// console.log( `${ h }, it's type is ${ typeof h }  JSON.stringify Used means we have converted the object into string` );


// String to object

// let i = JSON.parse( h )


// console.log( i, "JSON.parse Used" );



// Briefly for the internet uses (posting) we are stringifying (JSON.stringify) the data because of "it is the standard" and while we are using it in JS that is always an object (getting the data)
// Axios library does this things for us automatically 
