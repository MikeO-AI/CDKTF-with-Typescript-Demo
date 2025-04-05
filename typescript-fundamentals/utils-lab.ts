import { multiply, divide } from './import-validation/utils';

const num1: number = 20;
const num2: number = 4;

// Multiply
const product = multiply(num1, num2);
console.log(`The product of ${num1} and ${num2} is: ${product}`);

// Divide
try {
  const quotient = divide(num1, num2);
  console.log(`The quotient of ${num1} divided by ${num2} is: ${quotient}`);
} catch (error: any) {
  console.log(error.message);
}

// Test Division by 0
try {
  const divideByZero = divide(num1, 0);
  console.log(`Result of dividing ${num1} by 0 is: ${divideByZero}`);
} catch (error: any) {
  console.log(`Error: ${error.message}`);
}