function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }
  return a + b; // Basic addition
}

console.log(foo(null, 5)); // Output: null
console.log(foo(10, null)); // Output: null
console.log(foo(5, 10)); // Output: 15

// Unexpected behavior with NaN
console.log(foo(NaN, 5)); // Output: NaN
console.log(foo(5, NaN)); // Output: NaN