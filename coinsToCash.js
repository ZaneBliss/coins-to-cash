
const piggyBank = {
    quarters: 15/4,
    dimes: 7/10,
    nickels: 25/20,
    pennies: 165/100
}
let dollarAmount = 0;

const values = Object.values(piggyBank) 

for (value of values) {
    dollarAmount += value
}

console.log(`$${dollarAmount}`);
