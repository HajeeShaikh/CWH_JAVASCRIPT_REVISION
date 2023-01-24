// cookies are small strings of data stored directly in the browser

document.cookie = "First_Name=Hajee"
document.cookie = "Last_Name=Shaikh"
document.cookie = "Middle_Name=Gausodeen"
document.cookie = "Qualification=Bachelor of Engineering"
console.log( document.cookie, "<<<<<<<===before" );
let a = prompt( "Enter key: " )
let b = prompt( "Enter value: " )
document.cookie = `${ encodeURIComponent( a ) } = ${ encodeURIComponent( b ) }` // To get any kind of symbolic input.
console.log( document.cookie, "<<<<<<<===after" );

// and to decode them use decodeURIComponent(encodedData)