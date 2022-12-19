/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div

let billInput = document.getElementById('billTotalInput')
let tipInput = document.getElementById('tipInput')
let numberOfPeopleDiv = document.getElementById('numberOfPeople')
let perPersonTotalDiv = document.getElementById('perPersonTotal')


// Get number of people from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerText)

// ** Calculate the total bill per person **
const calculateBill = () => {

  // get bill from user input & convert it into a number
  let bill = Number(billInput.value)
  // console.log(bill)

  // get the tip from user & convert it into a percentage (divide by 100)
  const tipPercentage = Number(tipInput.value) / 100
  // console.log(tipPercentage)
  
  // const tipAmount = tipPercentage * bill
  // console.log(tipAmount)
  // const total = bill  + tipAmount
  // console.log('TotalbillAmount:',total)

  // get the total tip amount
    const tipAmount = tipPercentage * bill
  // console.log(tipAmount)
  

  // calculate the total (tip amount + bill)
  const Total = bill  + tipAmount
  // console.log('Total:',Total)
  

  // calculate the per person total (total divided by number of people)
 const TotalPerPerson = Total / numberOfPeople
  // console.log('u pay:',TotalPerPerson)

  // update the perPersonTotal on DOM & show it to user
  
  // perPersonTotalDiv.innerText = `$${TotalPerPerson}`
  
  // THE ABOVE CODE WILL GIVE VALUES IN DECIMAL SO TO roundoff that value use below code
  
  perPersonTotalDiv.innerText = `$${TotalPerPerson.toFixed(2)}`
  
  // OR
  // OR YOU CAN ALSO USE USD$ BY USING THE BELOW CODE that also includes comas(,) in required conditions
  
  // perPersonTotalDiv.innerText = `$${TotalPerPerson.toLocaleString('en-US')}`    
}


// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  numberOfPeople += 1

  // update the DOM with the new number of people
  numberOfPeopleDiv.innerText = numberOfPeople

  // calculate the bill based on the new number of people
  calculateBill()
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)

    if(numberOfPeople <=1){
      console.log(numberOfPeople,'Hey! you cannot have less than one person to share the bill')
      return
    }
  
  // decrement the amount of people
    numberOfPeople -= 1

  // update the DOM with the new number of people
    numberOfPeopleDiv.innerText = numberOfPeople

  // calculate the bill based on the new number of people
    calculateBill()
}