// // Arrays and Methods
// // Utilise the inbuilt methods of arrays in Javascript to solve the below tasks:



// // Task 1: Array Filtering

// // Write a function filterNumbers(arr) that returns only numbers from a mixed array
// function filterNumbers(arr) {
//     return arr.filter(item => typeof item === 'number');
//   }
  
//   // Example usage:
//   // console.log(filterNumbers([1, 'a', 2, 'b', 3, true])); // Output: [1, 2, 3]
  


// // Task 2: Array Reversal

// // Write a function reverseArray(arr) that reverses the array

// function reverseArray(arr) {
//     return arr.reverse();
//   }
  
//   // Example usage:
//   console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
  

// // Task 3: Find Maximum in an Array

// // Write a function findMax(arr) that returns the largest number in the array

// function findMax(arr) {
//     return Math.max(...arr);
//   }
  
//   // Example usage:
//   // console.log(findMax([4, 12, 7, 1, 9])); // Output: 12
  

// // Task 4: Remove Duplicates from an Array

// // Write a function removeDuplicates(arr) that returns a new array with all duplicates removed

// function removeDuplicates(arr) {
//     return [...new Set(arr)];
//   }
//  let duplicate= [1, 2, 2, 3, 4, 4, 5]
// let array= [...new Set(duplicate)];
// console.log(array); // Output:
//   // Example usage:
//   // console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
  

// // Task 5: Flatten a Nested Array

// // Write a function flattenArray(arr) that takes a nested array and returns a single flattened array
// function flattenArray(arr) {
//     return arr.flat(Infinity);
//   }
  
//   // Example usage:
//   // console.log(flattenArray([1, [2, [3, [4]], 5]])); // Output: [1, 2, 3, 4, 5]
  
// const flattenArray= [1,2,3,4,5,6,7]
// flattenArray.map((flattenArray) => flattenArray(flattenArray*2)); //output: [1, 2, 3, 4, 5]




function Person(name,section) {
 this.name = name
 this.section = section
 let john = new Person("john",8);
return `John ${this.name} ${this.section}`;
}

