// Q3=> Ans :===>
// const g = () =>
// {
//     // location.href( "https://www.google.com" )   // This can't be given on button
//     // window.location( "https://www.google.com" ) // wrong
//     window.location.assign( "https://www.google.com" )
//     win.focus()
// }

// const fb = () =>
// {
//     window.location.assign( "https://www.facebook.com" )
//     win.focus()
// }

// const t = () =>
// {
//     window.location.assign( "https://www.twitter.com" )
//     win.focus()
// }

// let google = document.getElementById( "google" ).addEventListener( "click", g)
// let facebook = document.getElementById( "facebook" ).addEventListener( "click", fb)
// let twitter = document.getElementById( "twitter" ).addEventListener( "click", t)


// Q4) Write a JS program to keep fetching contents of a website (Every 5 seconds).

// const fetchContent = async ( url ) =>
// {
//     con = await fetch( url );
//     let a = await con.json()
//     return a
// }

// const fetch = setInterval( async function ()  {
//     let url = 'https://jsonplaceholder.typicode.com/todos/1'
//     console.log(await fetchContent( url ) ); 
// }, 5000 );


// Q5) Create a bulb 

let light = document.getElementById("bulb")

setInterval(() => {
    light.classList.toggle("bg-yellow-300")
}, 300);
