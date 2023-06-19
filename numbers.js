//3.Numbers:

//a. Write a JavaScript function that takes a positive integer as input and returns true if it is a prime number, otherwise returns false.
//b. Implement the function to check if a given positive integer is a prime number.

function isPrime(number) {
    if (number <= 1) {
      return false; // Numbers less than or equal to 1 are not prime
    }
  
    // Check for divisibility from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false; // If divisible, it's not prime
      }
    }
  
    return true; // No divisors found, it's prime
}

const number = 36;

// Call the function and display the result
const result = isPrime(number);
console.log("Is Prime:", result);