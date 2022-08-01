const prompt = require( "prompt-sync" )();

let P1Contribution = prompt( "Enter contribution of Fauzan =====> : " )
P1Contribution = Number.parseInt( P1Contribution )


let P2Contribution = prompt( "Enter contribution of Altamash =====> : " )
P2Contribution = Number.parseInt( P2Contribution )


let P3Contribution = prompt( "Enter contribution of Shoaib =====> : " )
P3Contribution = Number.parseInt( P3Contribution )


let P4Contribution = prompt( "Enter contribution of Rafiq =====> : " )
P4Contribution = Number.parseInt( P4Contribution )


let P5Contribution = prompt( "Enter contribution of Hajee =====> : " )
P5Contribution = Number.parseInt( P5Contribution )


const Total = P1Contribution +
  P2Contribution +
  P3Contribution +
  P4Contribution +
  P5Contribution


console.log( "Total ====> : ", Total );

const perHeadContribution = Total / 5

console.log( "perHeadContribution =====> : ", perHeadContribution );

// For checking whose contribution is more

const PCount = []

PCount.push( P1Contribution )
PCount.push( P2Contribution )
PCount.push( P3Contribution )
PCount.push( P4Contribution )
PCount.push( P5Contribution )

console.log( "PCount Array is =====> : ", PCount );

const bigContribution = ( Math.max( ...PCount ) )
const smallContribution = ( Math.min( ...PCount ) )

console.log( "Big Contribution is =====> : ", bigContribution )
console.log( "Small Contribution is =====> : ", smallContribution )

// if ( bigContribution > perHeadContribution )
// {
//   const amountToBeDistributed = bigContribution - perHeadContribution
//   console.log( "amountToBeDistributed =====>  : ", amountToBeDistributed )
// }

// Amount to be distributed should be returned to big contributor by all P


let distributedAmountCollector = []


// P1 Calculations

let AmountShouldPayByP1 = perHeadContribution - P1Contribution


if ( AmountShouldPayByP1 < 0 )
{
  console.log( "Fauzan is biggest contributor wait for your return of investment/contribution" )

  console.log( "You should get your extra Amount from CollectedAmountHolder is =====> : ", ( P1Contribution - perHeadContribution ) )

}
else if ( AmountShouldPayByP1 == 0 )
{
  console.log( "Fauzan , your contribution is equal to per head contribution" )
}
else
{
  distributedAmountCollector.push( AmountShouldPayByP1 )
  console.log( "Amount Should Pay By Fauzan to CollectedAmountHolder =====> : ", AmountShouldPayByP1 )
}

// P2 Calculations



let AmountShouldPayByP2 = perHeadContribution - P2Contribution


if ( AmountShouldPayByP2 < 0 )
{
  console.log( "Altamsh is biggest contributor wait for your return of investment/contribution" )
  console.log( "Altamash should get your extra Amount from CollectedAmountHolder is =====> : ", ( P2Contribution - perHeadContribution ) )

}
else if ( AmountShouldPayByP2 == 0 )
{
  console.log( "Altamsh , your contribution is equal to per head contribution" )
}
else
{
  distributedAmountCollector.push( AmountShouldPayByP2 )
  console.log( "Amount Should Pay By Altamsh to CollectedAmountHolder =====> : ", AmountShouldPayByP2 )
}

// P3 Calculations

let AmountShouldPayByP3 = perHeadContribution - P3Contribution


if ( AmountShouldPayByP3 < 0 )
{
  console.log( "Shoaib is biggest contributor wait for your return of investment/contribution" )
  console.log( "Shoaib should get your extra Amount from CollectedAmountHolder is =====> : ", ( P3Contribution - perHeadContribution ) )

}
else if ( AmountShouldPayByP3 == 0 )
{
  console.log( "Shoaib , your contribution is equal to per head contribution" )
}
else
{
  distributedAmountCollector.push( AmountShouldPayByP3 )
  console.log( "Amount Should Pay By Shoaib to CollectedAmountHolder =====> : ", AmountShouldPayByP3 )
}


// P4 Calculations


let AmountShouldPayByP4 = perHeadContribution - P4Contribution


if ( AmountShouldPayByP4 < 0 )
{
  console.log( "Rafiq is biggest contributor wait for your return of investment/contribution" )
  console.log( "Rafiq should get your extra Amount from CollectedAmountHolder is =====> : ", ( P4Contribution - perHeadContribution ) )

}
else if ( AmountShouldPayByP4 == 0 )
{
  console.log( "Rafiq , your contribution is equal to per head contribution" )
}
else
{
  distributedAmountCollector.push( AmountShouldPayByP4 )
  console.log( "Amount Should Pay By Rafiq to CollectedAmountHolder =====> : ", AmountShouldPayByP4 )
}

// P5 Calculations


let AmountShouldPayByP5 = perHeadContribution - P5Contribution


if ( AmountShouldPayByP5 < 0 )
{
  console.log( "Hajee is biggest contributor wait for your return of investment/contribution" )
  console.log( "Hajee should get your extra Amount from CollectedAmountHolder is =====> : ", ( P5Contribution - perHeadContribution ) )
}
else if ( AmountShouldPayByP5 == 0 )
{
  console.log( "Hajee , your contribution is equal to per head contribution" )
}
else
{
  distributedAmountCollector.push( AmountShouldPayByP5 )
  console.log( "Amount Should Pay By Hajee to CollectedAmountHolder =====> : ", AmountShouldPayByP5 )
}


console.log( "distributedAmountCollector =====> : ", distributedAmountCollector );


let CollectedAmountHolder = 0

for ( let i = 0; i < distributedAmountCollector.length; i++ )
{
  CollectedAmountHolder += distributedAmountCollector[ i ];

}
console.log( "CollectedAmountHolder now have =====> : ", CollectedAmountHolder )



/*

// Paying to the different contributors


// if Fauzan is biggest contributor 

// means AmountShouldPayByP1 < 0

if ( AmountShouldPayByP1 < 0 )
{
  const FinalAmountOfFauzan = CollectedAmountHolder - ( P1Contribution - perHeadContribution )

  console.log( "FinalAmountOfFauzan =====> : ", FinalAmountOfFauzan )
}
// if Altamash is biggest contributor

else if ( AmountShouldPayByP2 < 0 )
{
  const FinalAmountOfAltamash = CollectedAmountHolder - ( P2Contribution - perHeadContribution )
  console.log( "FinalAmountOfAltamash =====> : ", FinalAmountOfAltamash )
}
// if Shoaib is biggest contributor 

else if ( AmountShouldPayByP3 < 0 )
{
  const FinalAmountOfShoaib = CollectedAmountHolder - ( P3Contribution - perHeadContribution )
  console.log( "FinalAmountOfShoaib =====> : ", FinalAmountOfShoaib )
}

// if Rafiq is biggest contributor

else if ( AmountShouldPayByP4 < 0 )
{
  const FinalAmountOfRafiq = CollectedAmountHolder - ( P4Contribution - perHeadContribution )
  console.log( "FinalAmountOfRafiq =====> : ", FinalAmountOfRafiq )
}


// if Hajee is biggest contributor

else if ( AmountShouldPayByP5 < 0 )
{
  const FinalAmountOfHajee = CollectedAmountHolder - ( P5Contribution - perHeadContribution )
  console.log( "FinalAmountOfHajee =====> : ", FinalAmountOfHajee )
}



// const CollectThisByOne = distributedAmountCollector.reduce(
//   ( accumulator, currentValue ) =>
//   {
//     accumulator + currentValue

//   } )

// console.log( "Collect This by one =====> : ", CollectThisByOne )

// if ( ( AmountShouldPayByP5 > 0 ) || ( AmountShouldPayByP4 > 0 ) || ( AmountShouldPayByP3 > 0 ) || ( AmountShouldPayByP2 > 0 ) || ( AmountShouldPayByP1 > 0 ) )
// {
//   const TotalAmountShouldBePaid = AmountShouldPayByP5 + AmountShouldPayByP4 + AmountShouldPayByP3 + AmountShouldPayByP2 + AmountShouldPayByP1

//   console.log( "TotalAmountShouldBePaid =====> : ", TotalAmountShouldBePaid )
// }

*/