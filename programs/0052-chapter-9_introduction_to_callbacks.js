
// const prompt = require( 'prompt-sync' )();

// Synchronous Programming

// let a = prompt( "Enter first number : " )
// a= Number.parseInt(a)
// let b = prompt( "Enter second number : " )
// b=Number.parseInt(b)
// let c = prompt( "Enter third number : " )
// c = Number.parseInt( c )

// console.log("The addition of given numbers is => ",a+b+c)

// Asynchronous Programming

// console.log('Wait for 5 sec to get multiplication')
// setTimeout(() => {
//     console.log("The multiplication of the given numbers is => ", a*b*c);
// }, 5000 );
// console.log( "Thanks" );

// Callback

const loadScript = (src,callback) =>
{
    let script = document.createElement( 'script' )
    script.src = src
    script.onload = () =>
    {
        console.log( "script loaded" );
        callback(null,src)
    }
    // Handling error

    script.onerror = () => { console.log( new Error( "src got some error ", src ) ) }

    document.body.appendChild(script)
}

const greetings = ( error, src) =>
{
    if ( error )
    {
    console.log(error);
}

    alert("Hello and Welcome............!  \n" + src)
}

loadScript( "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js", greetings )