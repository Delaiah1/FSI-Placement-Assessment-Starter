
// First, tell us your name
let yourName = "Delaiah" // HINT: Replace this with your own name!
//buttons = clickable
//make functions for them

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// selecting the element with an id of credit
const credit = document.querySelector('#credit')

// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
const gbQty = document.querySelector('#qty-gb')

//minus-gb

const gbMinusBtn = document.querySelector('#minus-gb')


// Code to update name display
credit.textContent = `Created by ${'Delaiah'}`

// Event listener for clicks on the "+" button for Gingerbread cookies

gbPlusBtn.addEventListener('click', function(){
        gb = gb + 1
        gbQty.textContent = gb
    })

    // "-gb"
    gbMinusBtn.addEventListener('click', function(){
        gb = gb - 1
        gbQty.textContent = gb
    })
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