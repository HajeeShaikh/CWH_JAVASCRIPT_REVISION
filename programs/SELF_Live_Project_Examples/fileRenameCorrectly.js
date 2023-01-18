const prompt = require( "prompt-sync" )()

// Created function for file renaming

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

// First took the inputs

let currentFileName = prompt( "Enter your file name:===> " )

// Here filtered the file name for unnecessary data

if ( ( currentFileName?.includes( "," ) ) || ( currentFileName?.includes( "&" ) ) )
{
  var commaAndLessFileName = currentFileName.replace( /,/g, " " ).replace( /&/g, " " )
  console.log( "commaAndLessFileName:===>", commaAndLessFileName );

} else
{
  var commaAndLessFileName = currentFileName
}
if ( ( commaAndLessFileName?.includes( " " ) ) || ( commaAndLessFileName?.includes( "__" ) ) )
{
  var comAndSpaceLessFileName = commaAndLessFileName.replace( /["/"||":"]/g, " " ).replace( / /g, "_" ).replace( /__/g, "_" ).replace( /__/g, "_" )
  console.log( "comAndSpaceLessFileName:===>", comAndSpaceLessFileName );
} else
{
  var comAndSpaceLessFileName = commaAndLessFileName
}

let sr_no = prompt( "Enter your sr_no:===> " )
let chapter_no = prompt( "Enter chapter_no:===> " )

// Called function with inputs and "FILTERED FILE NAME"

console.log( "comAndSpaceLessFileName:===>", comAndSpaceLessFileName );

let correctFileName = FileRename( sr_no, chapter_no, comAndSpaceLessFileName )

console.log( "correctFileName:===> ", correctFileName );
