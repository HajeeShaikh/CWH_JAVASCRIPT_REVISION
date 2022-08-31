

const prompt = require( "prompt-sync" )();


// let garbage = prompt( "Enter Payment for garbage:===> " )
// let water = prompt( "Enter Payment for water:===> " )

/*for line spacing and clear vision using console.log( "\n" )
Also it is helping in stopping in un-necessary indentation of any single digit change in terminal
*/

console.log( "\n" );

let P1Contribution = prompt( "Enter contribution of Fauzan =====> : " )
P1Contribution = Number.parseInt( P1Contribution )

console.log( "\n" );

let P2Contribution = prompt( "Enter contribution of Altamash =====> : " )
P2Contribution = Number.parseInt( P2Contribution )
console.log( "\n" );


let P3Contribution = prompt( "Enter contribution of Shoaib =====> : " )
P3Contribution = Number.parseInt( P3Contribution )
console.log( "\n" );


let P4Contribution = prompt( "Enter contribution of Rafiq =====> : " )
P4Contribution = Number.parseInt( P4Contribution )
console.log( "\n" );


let P5Contribution = prompt( "Enter contribution of Hajee =====> : " )
P5Contribution = Number.parseInt( P5Contribution )
console.log( "\n" );


const Total = P1Contribution +
  P2Contribution +
  P3Contribution +
  P4Contribution +
  P5Contribution

console.log( "\n" );  // for line spacing

console.log( " Total ====> : ", Total );

const perHeadContribution = Total / 5

console.log( "\n" );

console.log( "perHeadContribution =====> : ", perHeadContribution );

console.log( "\n" );

// For checking whose contribution is more

const PCountWithNames = []

// PCountWithNames.push( `ContributionOfFauzan = ${ P1Contribution }` )
PCountWithNames.push( { "Fauzan": `${ P1Contribution }₹` } )
// PCountWithNames.push( `ContributionOfAltamash =  ${ P2Contribution }` )
PCountWithNames.push( { "Altamsh": `${ P2Contribution }₹` } )
// PCountWithNames.push( `ContributionOfShoaib = ${ P3Contribution }` )
PCountWithNames.push( { "Shoaib": `${ P3Contribution }₹` } )
// PCountWithNames.push( `ContributionOfRafiq = ${ P4Contribution }` )
PCountWithNames.push( { "Rafiq": `${ P4Contribution }₹` } )
// PCountWithNames.push( `ContributionOfHajee = ${ P5Contribution }` )
PCountWithNames.push( { "Hajee": `${ P5Contribution }₹` } )

console.log( "\n" );

console.log( "PCountWithNames Array is =====> : ", PCountWithNames );

console.log( "\n" );

// Regaining only number values from above array of objects

let PCount = []
for ( let objects of PCountWithNames )
{
  let a = ( ( Object.values( objects ) ) )[ 0 ].replace( "₹", ".0" )

  PCount.push( parseInt( a ) )

}

// Total Re - verification from array

console.log( "\n" )

console.log( "Total Re-verified from array =====> : ", PCount.reduce( ( a, b ) =>
{
  return a + b
} ) )

console.log( "\n" )
console.log( "PCount Array is =====> : ", PCount );
console.log( "\n" )
const bigContribution = ( Math.max( ...PCount ) )
const smallContribution = ( Math.min( ...PCount ) )

console.log( "Big Contribution is =====> : ", bigContribution )
console.log( "\n" )
console.log( "Small Contribution is =====> : ", smallContribution )
console.log( "\n" )



// Amount to be distributed should be returned to big contributor by all P


let distributedAmountCollector = []


// P1 Calculations

let AmountShouldPayByP1 = perHeadContribution - P1Contribution


if ( AmountShouldPayByP1 < 0 )
{
  console.log( "\n" )
  console.log( "Fauzan is biggest contributor wait for your return of investment/contribution" )
  console.log( "\n" )
  console.log( "You should get your extra Amount from CollectedAmountHolder is =====> : ", ( P1Contribution - perHeadContribution ) )
  console.log( "\n" )

}
else if ( AmountShouldPayByP1 == 0 )
{
  console.log( "\n" )
  console.log( "Fauzan , your contribution is equal to per head contribution" )
  console.log( "\n" )
}
else
{
  distributedAmountCollector.push( AmountShouldPayByP1 )
  console.log( "\n" )
  console.log( "Amount Should Pay By Fauzan to CollectedAmountHolder =====> : ", AmountShouldPayByP1 )
  console.log( "\n" )
}

// P2 Calculations



let AmountShouldPayByP2 = perHeadContribution - P2Contribution


if ( AmountShouldPayByP2 < 0 )
{
  console.log( "\n" )
  console.log( "Altamsh is biggest contributor wait for your return of investment/contribution" )
  console.log( "\n" )
  console.log( "Altamash should get your extra Amount from CollectedAmountHolder is =====> : ", ( P2Contribution - perHeadContribution ) )
  console.log( "\n" )
}
else if ( AmountShouldPayByP2 == 0 )
{
  console.log( "\n" )
  console.log( "Altamsh , your contribution is equal to per head contribution" )
  console.log( "\n" )
}
else
{
  distributedAmountCollector.push( AmountShouldPayByP2 )
  console.log( "\n" )
  console.log( "Amount Should Pay By Altamsh to CollectedAmountHolder =====> : ", AmountShouldPayByP2 )
  console.log( "\n" )
}

// P3 Calculations

let AmountShouldPayByP3 = perHeadContribution - P3Contribution


if ( AmountShouldPayByP3 < 0 )
{
  console.log( "\n" )
  console.log( "Shoaib is biggest contributor wait for your return of investment/contribution" )
  console.log( "\n" )
  console.log( "Shoaib should get your extra Amount from CollectedAmountHolder is =====> : ", ( P3Contribution - perHeadContribution ) )
  console.log( "\n" )
}
else if ( AmountShouldPayByP3 == 0 )
{
  console.log( "\n" )
  console.log( "Shoaib , your contribution is equal to per head contribution" )
  console.log( "\n" )
}
else
{
  distributedAmountCollector.push( AmountShouldPayByP3 )
  console.log( "\n" )
  console.log( "Amount Should Pay By Shoaib to CollectedAmountHolder =====> : ", AmountShouldPayByP3 )
  console.log( "\n" )
}


// P4 Calculations


let AmountShouldPayByP4 = perHeadContribution - P4Contribution


if ( AmountShouldPayByP4 < 0 )
{
  console.log( "\n" )
  console.log( "Rafiq is biggest contributor wait for your return of investment/contribution" )
  console.log( "\n" )
  console.log( "Rafiq should get your extra Amount from CollectedAmountHolder is =====> : ", ( P4Contribution - perHeadContribution ) )
  console.log( "\n" )
}
else if ( AmountShouldPayByP4 == 0 )
{
  console.log( "\n" )
  console.log( "Rafiq , your contribution is equal to per head contribution" )
  console.log( "\n" )
}
else
{
  distributedAmountCollector.push( AmountShouldPayByP4 )
  console.log( "\n" )
  console.log( "Amount Should Pay By Rafiq to CollectedAmountHolder =====> : ", AmountShouldPayByP4 )
  console.log( "\n" )
}

// P5 Calculations


let AmountShouldPayByP5 = perHeadContribution - P5Contribution


if ( AmountShouldPayByP5 < 0 )
{
  console.log( "\n" )
  console.log( "Hajee is biggest contributor wait for your return of investment/contribution" )
  console.log( "\n" )
  console.log( "Hajee should get your extra Amount from CollectedAmountHolder is =====> : ", ( P5Contribution - perHeadContribution ) )
  console.log( "\n" )
}
else if ( AmountShouldPayByP5 == 0 )
{
  console.log( "\n" )
  console.log( "Hajee , your contribution is equal to per head contribution" )
  console.log( "\n" )
}
else
{
  distributedAmountCollector.push( AmountShouldPayByP5 )
  console.log( "\n" )
  console.log( "Amount Should Pay By Hajee to CollectedAmountHolder =====> : ", AmountShouldPayByP5 )
  console.log( "\n" )
}

console.log( "\n" )
console.log( "distributedAmountCollector =====> : ", distributedAmountCollector );
console.log( "\n" )

// Calculation of total distributed amount


let CollectedAmountHolder = distributedAmountCollector.reduce( ( a, b ) =>
{
  return a + b
}, 0 )        // Here initial value is must if all contributions are equal.
console.log( "\n" )
console.log( "CollectedAmountHolder now have =====> : ", CollectedAmountHolder )
console.log( "\n" )




// Paying to the different contributors


// if Fauzan is biggest contributor 

// means AmountShouldPayByP1 < 0

// means he wants his investment back i.e. 

// returnOfContributionOfFauzan = investmentOfFauzan - perHeadContribution


if ( AmountShouldPayByP1 < 0 )
{

  const returnOfContributionOfFauzan = P1Contribution - perHeadContribution

  CollectedAmountHolder = CollectedAmountHolder - returnOfContributionOfFauzan
  console.log( "\n" )
  console.log( `After paying Fauzan' s extra contribution which is = 
   ${ returnOfContributionOfFauzan }₹; CollectedAmountHolder have ${ CollectedAmountHolder }₹` )
  console.log( "\n" )
}
// if Altamash is biggest contributor

if ( AmountShouldPayByP2 < 0 )
{
  const returnOfContributionOfAltamash = P2Contribution - perHeadContribution

  CollectedAmountHolder = CollectedAmountHolder - returnOfContributionOfAltamash
  console.log( "\n" )
  console.log( `After paying Altamash' s extra contribution which is = 
   ${ returnOfContributionOfAltamash }₹; CollectedAmountHolder have ${ CollectedAmountHolder }₹` )
  console.log( "\n" )
}
// if Shoaib is biggest contributor 

if ( AmountShouldPayByP3 < 0 )
{
  const returnOfContributionOfShoaib = P3Contribution - perHeadContribution

  CollectedAmountHolder = CollectedAmountHolder - returnOfContributionOfShoaib
  console.log( "\n" )
  console.log( `After paying Shoaib' s extra contribution which is = 
   ${ returnOfContributionOfShoaib }₹; CollectedAmountHolder have ${ CollectedAmountHolder }₹` )
  console.log( "\n" )
}

// if Rafiq is biggest contributor

if ( AmountShouldPayByP4 < 0 )
{
  const returnOfContributionOfRafiq = P4Contribution - perHeadContribution

  CollectedAmountHolder = CollectedAmountHolder - returnOfContributionOfRafiq
  console.log( "\n" )
  console.log( `After paying Rafiq' s extra contribution which is = 
   ${ returnOfContributionOfRafiq }₹; CollectedAmountHolder have ${ CollectedAmountHolder }₹` )

  console.log( "\n" )
}


// if Hajee is biggest contributor

if ( AmountShouldPayByP5 < 0 )
{
  const returnOfContributionOfHajee = P5Contribution - perHeadContribution

  CollectedAmountHolder = CollectedAmountHolder - returnOfContributionOfHajee
  console.log( "\n" )
  console.log( `After paying Hajee' s extra contribution which is = 
   ${ returnOfContributionOfHajee }₹; CollectedAmountHolder have ${ CollectedAmountHolder }₹` )

  console.log( "\n" )
}