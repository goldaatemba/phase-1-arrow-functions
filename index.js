// Define functions using function expressions and arrow functions

// Function expression
const divide = function() {
    return 2000 / 100;
  };
  
  // Arrow function with one parameter
  const square = x => x * x;
  
  // Arrow function with two parameters
  const add = (a, b) => a + b;
  
  // Test the functions
  console.log(divide()); // Should print 20
  console.log(square(4)); // Should print 16
  console.log(add(3, 5)); // Should print 8