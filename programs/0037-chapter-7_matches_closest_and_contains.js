let id = document.getElementById( "first" )
let sp = document.getElementById( "span" )

// elem.matches  will returns true if that particular id matches with the given class 

// console.log( id.matches( ".first" ) )

// elem.closest will return nearest parent which satisfy the given condition 

// console.log( sp.closest( ".first" ) )
// console.log( sp.closest( "#span" ) )

// elem.contains will return true or false based on condition

console.log( id.contains( sp ) );
console.log( sp.contains( sp ) );
console.log( sp.contains( id ) );