/*
Q) Write a JS program to pretend to look like hacker.
Write an async function to which will simply display the following output:

Initializing hack program....

Hacking Ashish's username...

Username found...

Connecting to facebook...

Try to use HTML and styling if possible...
*/

const hackerMan = async () =>
{
    let p1 = async () =>
    {
        return new Promise( ( resolve, reject ) =>
        {
            setTimeout( () =>
            {
                resolve( "Initializing hack program...." )
            }, 2000 );
        } )
    }

    let p2 = async () =>
    {
        return new Promise( ( resolve, reject ) =>
        {
            setTimeout( () =>
            {
                resolve( "Hacking Ashish's username..." )
            }, 2000 );
        } )
    }

    let p3 = async () =>
    {
        return new Promise( ( resolve, reject ) =>
        {
            setTimeout( () =>
            {
                resolve( "Username found..." )
            }, 2000 );
        } )
    }

    let p4 = async () =>
    {
        return new Promise( ( resolve, reject ) =>
        {
            setTimeout( () =>
            {
                resolve( "Connecting to facebook..." )
            }, 2000 );
        } )
    }

    let a1 = await p1()
    let a2 = await p2()
    let a3 = await p3()
    let a4 = await p4()

    console.log( a1 );
    console.log( a2 );
    console.log( a3 );
    console.log( a4 );

}

hackerMan()