let a = inOut.innerHTML

console.log( a, "inner" );

let b = inOut.outerHTML

console.log( b, "outer" );

console.log( document.body.textContent ); // gives all text content of website

console.dir( document.getElementsByTagName( "h5" ) ) // gives an object with properties

console.log( document.body.firstChild.nodeValue, "data" ); // gives the present data