// Exporting a default function
export default function calculateTotal(prices: number[]): number {
    return prices.reduce((total, price) => total + price, 0);
  }