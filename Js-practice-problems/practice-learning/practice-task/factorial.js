function calculateFactorial(n) {
    if (n === 0) {
      return 1;
    } else {
      let result = 1;
      for (let i = 1; i <= n; i++) {
        result *= i;
      }
      return result;
    }
  }
  
  // Example usage:
  console.log(calculateFactorial(5)); // Should output 120
  console.log(calculateFactorial(0)); // Should output 1
  console.log(calculateFactorial(8)); // Should output 40320
  