# Unexpected NaN Behavior in JavaScript Addition Function

This repository demonstrates a subtle bug in a simple JavaScript addition function. The function correctly handles null values but produces unexpected results when dealing with NaN (Not a Number).

## Bug Description

The `foo` function is designed to add two numbers. It correctly returns `null` if either input is `null`. However, when one or both inputs are `NaN`, the function returns `NaN`, which might not be the desired behavior in all cases.

## Solution

The provided solution shows how to explicitly check for `NaN` using `isNaN()` and handle it appropriately.  This ensures more predictable results when dealing with potential numerical errors.

## How to Run

1. Clone the repository.
2. Open `bug.js` to see the original buggy code and its output.
3. Open `bugSolution.js` to see the corrected code and its output.