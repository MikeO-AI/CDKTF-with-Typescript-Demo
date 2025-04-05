import calculateTotal from './import-validation/calculator';

const prices: number[] = [10, 20, 30, 40];
const total = calculateTotal(prices);
console.log(`The total price is: ${total}`);