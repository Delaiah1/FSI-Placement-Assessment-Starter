// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Delaiah" // HINT: Replace this with your own name!
// make sure buttons are clickable
//make functions for buttons

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// selecting the element with an id of credit
const credit = document.querySelector('#credit')

// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
console.log(gbPlusBtn)
//minus-gb
const gbMinusBtn = document.querySelector('#minus-gb')
console.log(gbMinusBtn)

// Code to update name display
credit.textContent = `Created by ${'Delaiah'}`

// Event listener for clicks on the "+" button for Gingerbread cookies
const totalNum = document.querySelector('gb')
console.log(totalNum)
gbPlusBtn.addEventListener('click', function(e){
    gb = gb + 1;
    console.log(gb);
}); 

// HINT: You can delete this console.log after you no longer need it!

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked


// TODO: Hook up event listeners for the rest of the buttons
const ccPlusBtn = document.querySelector('#add-cc')
console.log(ccPlusBtn)

const ccMinusBtn = document.querySelector('#minus-cc')
console.log(ccMinusBtn)

const sugarPlusBtn = document.querySelector('#add-sugar')
console.log(sugarPlusBtn)

const sugarMinusBtn = document.querySelector('#minus-sugar')
console.log(sugarMinusBtn)