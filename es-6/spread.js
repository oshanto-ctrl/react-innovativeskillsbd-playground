// Spread (...): Expands an iterable (like an array) into individual elements.

const toBeAddedChars = ["GG", "BG"];
const messageConstuctedAs = [...toBeAddedChars.slice(0, 1), " I am ", ...toBeAddedChars.slice(1)];
// console.log(`#MESSAGE: ${messageConstuctedAs}`);




// Main Cart (With Qty. and units)
// An Item consist of qyt:number unit:string pack:number cost:number
let cart = {
    butter: {qty: 1, unit: "50 gm", pack: 1, cost: 2.50},
    milk: {qty: 1, unit: "1 liter", pack: 1, cost: 1.80},
};

// New Items For Checkout
const toBeAdded = {
    cheese: {qty: 10, unit: "slices", pack: 2, cost:5.00},
    milk: {qty: 1, unit: "1 liter", pack: 1, cost: 1.80}, // Duplicate Item Already in Cart
    sugar: {qty: 1, unit: "1 kg", pack: 1, cost: -3.20}
};

// Merge toBeAdded to card with help of an third object {}
// Make sure the duplicate and quantity handles correctly.
const updatedCart = { ...cart };

for (const item in toBeAdded){
    if(updatedCart[item]){
        //If Items exists add quantity and pack
        updatedCart[item].qty += toBeAdded[item].qty;
        updatedCart[item].pack += toBeAdded[item].pack;
    } else {
        // If new items countered, add directly
        updatedCart[item] = { ...toBeAdded[item] };
    }
}

// Calculate cost
let totalCost = 0.00;
for(const item in updatedCart){
    if(updatedCart[item].cost < 0){
        throw new Error(`Negative Cost Countered for item: ${item}`);
    }

    totalCost += updatedCart[item].cost * updatedCart[item].qty;
}

// Dispaly updated card
console.log("Bhuiyan Family Cart:\n\n", updatedCart);
console.log("\n TOTAL COST: $", totalCost.toFixed(2));





