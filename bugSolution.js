function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }
  if (isNaN(a) || isNaN(b)) {
    return 0; // Or handle NaN as you see fit (e.g., return 0, throw an error, etc.)
  }
  return a + b; // Basic addition
}

console.log(foo(null, 5)); // Output: null
console.log(foo(10, null)); // Output: null
console.log(foo(5, 10)); // Output: 15

// Improved NaN handling
console.log(foo(NaN, 5)); // Output: 0
console.log(foo(5, NaN)); // Output: 0