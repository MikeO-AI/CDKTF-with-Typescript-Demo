import { add, subtract } from './import-validation/mathUtils';

const num1: number = 10;
const num2: number = 5;

const sum = add(num1, num2);
const difference = subtract(num1, num2);

console.log(`The sum of ${num1} and ${num2} is: ${sum}`);
console.log(`The difference between ${num1} and ${num2} is: ${difference}`);