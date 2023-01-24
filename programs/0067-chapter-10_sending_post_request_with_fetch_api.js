// Syntax 
// fetch ( url, options_object )

let url = 'https://jsonplaceholder.typicode.com/posts'
let todo = {
    title: 'Expenses',
    body: 'Classic Cuba',
    userId: 3441,
}

let options_object = {
    method: 'POST',
    body: JSON.stringify( todo ),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
}

const createToDo = async () =>
{
    let result = await fetch( url, options_object )
    let response = await result.json()
    return response

}


const mainFunction = async () =>
{
    let log = await createToDo()
    console.log( log, "------------------postlog" );
}

mainFunction()


const getToDo = async ( id ) =>
{
    let result = await fetch( `https://jsonplaceholder.typicode.com/todos/${ id }` )
    let response = await result.json()
    return response
}

const mainFunction2 = async () =>
{
    let result = await getToDo( 3441 )
    console.log( result, "----------getlog" );

}

try
{
    mainFunction2()
} catch ( error )
{
    console.log( error );
}
