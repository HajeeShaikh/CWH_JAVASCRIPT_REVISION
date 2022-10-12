/* 
// console.log( ( "Introduction to JavaScript" ).toLowerCase() )
// console.log( ( "Introduction to JavaScript" ).toLowerCase().replace( / /g, "_" ) )
*/
// "use strict"

const prompt = require( "prompt-sync" )()

// Task-1) Write a program which will help in renaming a file as 

// i) if chapter_no. is there then it will be in start like 

// <sr_no.>-chapter-<chapter_no>

// ii) if chapter_no. is not there then it will be in start like 

// <sr_no.>

// iii) all the characters should be in lowercase

// iv) all the spaces should be replaced by "_"

// v) file name must not contain "&", "__"

// vi) ending is ".js"

// overall file name without chapter no.:

// <sr_no.>-<this_is_file_name><.js>

// overall file name with chapter no.:

// <sr_no.>-<chapter>-<chapter_no.>_<this_is_file_name><.js>


const FileRename = ( sr_no, chapter_no, currentFileName ) =>
{
  if ( !chapter_no )
  {
    let current = currentFileName
    let renamedFileName;
    current = currentFileName?.toLowerCase()?.replace( / /g, "_" )
    renamedFileName = sr_no + "-" + current + ".js"
    return ( renamedFileName );
  }
  else if ( chapter_no )
  {
    let current = currentFileName
    let renamedFileName
    current = currentFileName?.toLowerCase()?.replace( / /g, "_" )
    renamedFileName = sr_no + "-chapter-" + chapter_no + "_" + current + ".js"
    return ( renamedFileName );

  }


}



let sr_no = prompt( "Enter your sr_no:===> " )
let chapter_no = prompt( "Enter chapter_no:===> " )
let currentFileName = prompt( "Enter the file name:===> " )

// FileRename( 1, 1, currentFileName )
// FileRename( "0001", "1", currentFileName )
let renamedFileName = FileRename( sr_no, chapter_no, currentFileName )


if ( ( renamedFileName?.includes( "," ) ) )
{
  let latestRenamedFileName = renamedFileName?.replace( /,/g, " " )
  console.log( "latestRenamedFileName:===>", latestRenamedFileName );
}

else
{
  console.log( "renamedFileName:===> ", renamedFileName );
}



// else ( latestRenamedFileName?.includes( "&" ) )
// {
//   var currentLatestRenamedFileName = latestRenamedFileName?.replace( /&/g, "" )
//   console.log( "currentLatestRenamedFileName:===> ", currentLatestRenamedFileName );
// }

// if ( currentLatestRenamedFileName?.includes( "__" ) )
// {
//   var newName = currentLatestRenamedFileName?.replace( /__/g, "_" )
//   console.log( "newName:===> ", newName );

// }

// else
// {
//   console.log( renamedFileName );

// }


/*

if ( ( renamedFileName.includes( "," ) ) )
{
  let latestRenamedFileName = renamedFileName.replace( ",", "" )
  if ( latestRenamedFileName.includes( "&" ) )
  {
    let currentLatestRenamedFileName = latestRenamedFileName.replace( "&", "" )
    console.log( "currentLatestRenamedFileName:===> ", currentLatestRenamedFileName );
    if ( currentLatestRenamedFileName.includes( "__" ) )
    {
      let newName = currentLatestRenamedFileName.replace( "__", "_" )
      console.log( "newName:===> ", newName );
    } else
    {
      console.log( currentLatestRenamedFileName );
    }
  } else
  {
    console.log( currentLatestRenamedFileName );
  }

} else
{
  console.log( renamedFileName );
}

54-chapter-324_hh sadf  hsaf.js

*/


// IT'S MODIFIED AND CORRECTED VERSION IS IN "fileRenameCorrectly.js"