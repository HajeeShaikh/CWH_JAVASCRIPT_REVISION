// function(total=totalExpense,members=5 ,days=totalDaysOfMonth)

// calculate1=> the total
// calculate2 => total/days of month
// calculate3 => calculate2/members ==> perDayPerHead
// calculate4 => perDayPerHead * present days of member
// 


// Algorithm


// 1) Take number of days of month
// 2) Take number of members
// 3) Each member's attendances
// 4) calculate total days of all present members
// 5) Total contribution of each member
// 6) Now total contribution / Total Attendance days of all members = per day expense
// 7) contribution of all members = total expense of month
// 8) per day expense * present days of member = AmpuntShouldPayByPerson
// 9) if AmpuntShouldPayByPerson < hisContribution then he should get his return from collecAmountholder
// hisContribution - AmountShouldPayByPerson = GetThisFromCollectAmountHolder
// 10) if AmpuntShouldPayByPerson > hisContribution then he should get pay to collecAmountholder
// AmountShouldPayByPerson - hisContribution  = PayThisToCollectAmountHolder
// 11) Reverify the amount after paying to respective persons


const prompt = require( "prompt-sync" )()

let totalDaysOfMonth = prompt( "Enter Total Days Of Month =====> : " )

totalDaysOfMonth = Number.parseInt( totalDaysOfMonth )

let totalMembersOfRoom = prompt( "Enter Total Members Of Room =====> : " )
totalMembersOfRoom = Number.parseInt( totalMembersOfRoom )


let RoomMembers = []


for ( let i = 0; i < totalMembersOfRoom; i++ )
{
  let members = prompt( "Enter Name of Member =====> : " )
  RoomMembers.push( members )
}

// console.log( RoomMembers, "RoomMembers" )

let AttendanceOfRoomMembers = []

for ( let i = 0; i < RoomMembers.length; i++ )
{
  let attendance = prompt( `Enter Attendance of ${ RoomMembers[ i ] } =====> : ` )
  attendance = Number.parseInt( attendance )
  AttendanceOfRoomMembers.push( attendance )
}

// console.log( AttendanceOfRoomMembers, "AttendanceOfRoomMembers" )

let totalDaysOfPresentMembers = AttendanceOfRoomMembers.reduce( ( a, b ) =>
{
  return a + b
}, 0 )


// console.log( totalDaysOfPresentMembers, "totalDaysOfPresentMembers" );


let ContributionOfEach = []

for ( let candidate of RoomMembers )
{
  let contribution1 = []
  while ( !contribution1.includes( 0 ) )
  {
    let cont = prompt( `Enter contribution of ${ candidate } =====> : ` )
    cont = Number.parseInt( cont )
    contribution1.push( cont )
  }
  ContributionOfEach.push( contribution1 )

}


// console.log( ContributionOfEach, "ContributionOfEach" );

// Each person's contribution

let EachPersonContribution = []
for ( let i = 0; i < ContributionOfEach.length; i++ )
{
  EachPersonContribution.push( ContributionOfEach[ i ].reduce( ( a, b ) =>
  {
    return a + b
  } ) )

}

// console.log( EachPersonContribution, "EachPersonContribution" )



let totalContribution = 0
for ( let contribution of ContributionOfEach )
{
  for ( let value of contribution )
  {
    totalContribution += value

  }
}


// console.log( totalContribution, "totalContribution" );

let perDayExpense = totalContribution / totalDaysOfPresentMembers

// console.log( perDayExpense, "perDayExpense" );


// To calculate Amount for one person with holidays is:

let ExpensesIncludingHolidays = []

for ( let attendance of AttendanceOfRoomMembers )
{
  let expenseOfEach = attendance * perDayExpense
  ExpensesIncludingHolidays.push( expenseOfEach )


}



let finalAmountArray = [];
let collecAmountholderWillGet = []
let collecAmountholderWillGive = []


for ( let i in ExpensesIncludingHolidays )
{

  let difference = EachPersonContribution[ i ] - ExpensesIncludingHolidays[ i ]

  finalAmountArray.push( difference )

  if ( difference < 0 )
  {
    collecAmountholderWillGet.push( difference )
  } else
  {

    collecAmountholderWillGive.push( difference )
  }


}


console.log( RoomMembers, "RoomMembers" )

console.log( AttendanceOfRoomMembers, "AttendanceOfRoomMembers" )

console.log( EachPersonContribution, "EachPersonContribution" )

console.log( ExpensesIncludingHolidays, "ExpensesIncludingHolidays" );

console.log( finalAmountArray, "finalAmountArray" );

console.log( collecAmountholderWillGet, "collecAmountholderWillGet" );

console.log( collecAmountholderWillGive, "collecAmountholderWillGive" );
