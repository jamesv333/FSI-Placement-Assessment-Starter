// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "James Vallon" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0;

function updateQuantity(Gingerbread) {
    let gb = document.querySelector("#qty-gb");
    gb.textContent = Gingerbread;
}
const gbdown = document.querySelector("#minus-gb");
const gbup = document.querySelector("#add-gb");

gbdown.addEventListener("click", function(e) {
    if (gb > 0) {
        gb--;
        updateQuantity(gb);
    }
});

gbup.addEventListener("click", function(e) {
    if (gb  >= 0) {
        gb++;
        updateQuantity(gb);
    }
});

let cc = 0 // Chocolate Chip

function updateQuantity2(ChocolateChip) {
    let cc = document.querySelector("#qty-cc");
    cc.textContent = ChocolateChip;
}
const ccdown = document.querySelector("#minus-cc");
const ccup = document.querySelector("#add-cc");

ccdown.addEventListener("click", function(e) {
    if (cc > 0) {
        cc--;
        updateQuantity2(cc);
    }
});

ccup.addEventListener("click", function(e) {
    if (cc  >= 0) {
        cc++;
        updateQuantity2(cc);
    }
});

let sugar = 0 // Sugar Sprinkle

function updateQuantity3(sugar) {
    let sugar = document.querySelector("#qty-sugar");
    sugar.textContent = ChocolateChip;
}
const sugardown = document.querySelector("#minus-sugar");
const sugarup = document.querySelector("#add-sugar");

sugardown.addEventListener("click", function(e) {
    if (sugar > 0) {
        sugar--;
        updateQuantity3(sugar);
    }
});

sugarup.addEventListener("click", function(e) {
    if (sugar  >= 0) {
        sugar++;
        updateQuantity3(sugar);
    }
});


// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
// HINT: You can delete this console.log after you no longer need it!
console.log('Gingerbread + button was clicked!')

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})

// TODO: Hook up event listeners for the rest of the buttons