# String Calculator TDD Kata

This repository contains my implementation of the String Calculator Kata using Test-Driven Development (TDD) principles. The goal of this exercise was to implement the requirements incrementally while adhering to TDD best practices.

## Requirements Implemented

### Core Features
1. **Basic Functionality**
   - Add method that sums up numbers in a string.
   - Handles:
     - Empty strings: `""` → `0`
     - Single numbers: `"1"` → `1`
     - Two numbers separated by a comma: `"1,5"` → `6`

2. **Multiple Numbers**
   - Handles an arbitrary number of comma-separated numbers: `"1,2,3,4"` → `10`

3. **Newline as Delimiter**
   - Supports newline characters as delimiters: `"1\n2,3"` → `6`

4. **Custom Delimiters**
   - Supports custom single-character delimiters: `"//;\n1;2"` → `3`

5. **Negative Numbers**
   - Throws an exception if negative numbers are encountered: `"1,-2,3"` → `Error: Negative numbers not allowed: -2`
   - Shows all negative numbers in the error message: `"1,-2,-3"` → `Error: Negative numbers not allowed: -2, -3`

6. **Ignore Large Numbers**
   - Ignores numbers greater than 1000: `"2,1001"` → `2`

### Advanced Features
7. **Delimiters of Any Length**
   - Supports delimiters of any length: `"//[***]\n1***2***3"` → `6`

8. **Multiple Delimiters**
   - Supports multiple delimiters: `"//[*][%]\n1*2%3"` → `6`

9. **Multiple Delimiters of Any Length**
   - Supports multiple delimiters with varying lengths: `"//[***][%%%]\n1***2%%%3"` → `6`

## Installation and Usage

### Prerequisites
- Node.js installed on your machine.

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Rahul555-droid/string-calculator-tdd-katta.git
   cd string-calculator-tdd-katta
   npm i
   npm test
   ```
