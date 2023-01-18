
// Custom modified clock

setInterval( () =>
{
    let a = new Date()
    let h = a.getHours()
    let m = a.getMinutes()
    let s = a.getSeconds()
    let DD = a.getDate()
    let MM = a.getMonth() + 1
    let YYYY = a.getFullYear()
    document.getElementById( "hours" ).innerHTML = h
    document.getElementById( "minutes" ).innerHTML = m
    document.getElementById( "seconds" ).innerHTML = s
    document.getElementById( "date" ).innerHTML = `${ DD }/${ MM }/${ YYYY }`
}, 1000 );


// Solved code 

setInterval( () =>
{
    newClock.innerHTML = new Date().toLocaleString( 'en-US', { hour: 'numeric', hour12: true, minute: 'numeric', second: "numeric" } )
    newClock.innerHTML = newClock.innerHTML + ` ${ new Date().toDateString() }`
}, 1000 );