// Q1) Use A Free API from the internet and feed your app with live data.

// Ans : ===>

// let url = "https://kontests.net/api/v1/all"
// let ihtml = ""

// const result = async () =>
// {
//     let res = await fetch( url )
//     let contests = await res.json()
//     console.log( contests );
//     for ( item in contests )
//     {
//         console.log( contests.item );
//         ihtml += `<div class="container" id="cardContainer">
//             <div>
//                 <h1 class="title">${ contests[ item ].name }</h1>
//             </div>
//             <div>
//                 <h6 class="time">${ contests[ item ].start_time }</h6>
//                 <h6 class="time">${ contests[ item ].end_time }</h6>
//                 <button class="btn btn-danger"><a href="${ contests[ item ].end_time }">Go Somewhere</a></button>
//             </div>
//         </div>
//         `
//     }
// }
// result()

// cardContainer.innerHTML = ihtml

// Q2) Creates A Notes Saving App Which Stores Your Notes to Local Storage.
// Q3) Repeat the last question and fetch the note which was saved.
// Q4) Delete the note in the previous question. 

let n = localStorage.getItem( "Note" )
if ( n )
{
    alert( `Your Note is "${ n }"` )
}

let note = prompt( "Add Your Note: " )
if ( note )
{
    localStorage.setItem( "Note", note )
    alert( `Your Note is "${ note }"` )
}

let confir = confirm( "Do you want to delete note...?" )

if ( confir )
{
    localStorage.removeItem( "Note" )
}