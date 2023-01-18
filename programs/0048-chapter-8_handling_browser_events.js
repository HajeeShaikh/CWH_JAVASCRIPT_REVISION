let a = prompt( `"first==1" OR "second==2"` )
let eventTest = document.getElementById( "eventCheck" )

const x = (e) =>
{
    // console.log(e,"<-----------event");
    // console.log(e.target,"<-----------event.target");
    // console.log( e.target.value, "<-----------event.target.value" );
    // console.log( e.clientX, e.clientX,"<-----------X and Y co-ordinates");
    alert("first")
}

const y = (e) =>
{
    alert("second")
}

const z = ( e ) =>
{
    alert("Other")
}


a = Number.parseInt( a )

eventTest.addEventListener( "click", x )
eventTest.addEventListener( "click", y )


if ( a == 1 )
{
    eventTest.removeEventListener( "click", y )
    // x()
}
else if ( a == 2 )
{
    eventTest.removeEventListener( "click", x )
    // y()
}
else
{
    z()
}

