// 2.Math Object:

//a. Write a JavaScript function that takes an array of numbers as input and returns the square root of the sum of squares of all the numbers. Use the Math object to perform the necessary calculations.
//b. Implement the function to display the square root of the sum of squares for an array of numbers.

function calculateSquareRootOfSumOfSquares(numbers) {
    let sumOfSquares = 0;
  
    // Calculate the sum of squares
    for (let i = 0; i < numbers.length; i++) {
      sumOfSquares += Math.pow(numbers[i], 2);
    }
  
    // Calculate the square root of the sum of squares
    const squareRoot = Math.sqrt(sumOfSquares);
  
    return squareRoot;
  }

const numbers = [3, 4, 5, 6, 7];

// Call the function and display the result
const result = calculateSquareRootOfSumOfSquares(numbers);
console.log("Square Root of Sum of Squares:", result);