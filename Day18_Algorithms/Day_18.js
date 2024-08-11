// ### **Activity 1: Sorting Algorithms**

// Task 1:


// ### **Activity 2: Searching Algorithms**

// Task 4:
function linearSearch(arr,target,n) {
    for (let index = 0; index < n; index++) {
        if (arr[index] === target) {
            return index;
        }
    }

    return -1;
}

let myArray4 = [10,16,44,2,1121,21,0,1]

let searchElement = 11;
const indexIs = linearSearch(myArray4, searchElement, myArray4.length);
console.log(`The element ${searchElement} is at index ${indexIs} in array`);


// // Task : 5

// function binarySearch(arr, target, n) {
//     let start = 0;
//     let end = n-1;

//     // This condition will run until start becomes greater than end
//     while (start <= end) {
        
//         // we only want integer values
//         let mid = Math.floor((start + end)/2);
        
//         // if mid_value matches our target_value
//         if (arr[mid] === target) {
//             return mid;
//         }
        
//         // if target_Value is smaller than mid_Value
//         if (arr[mid] > target) {
//             end = mid -1; 
//         }
        

//         // if target_Value is greater than mid_Value
//         else if (arr[mid] < target) {
//             start = mid +1;
//         }
//     }

//     return -1;
// }

// const myArray5 = [10,20,30,40,50,60,70,80]

// const targetElement = 20;

// const result = binarySearch(myArray5, targetElement, myArray5.length);

// console.log(`The element ${targetElement} is at index ${result} in Array5`);



// Activity 3: String Algorithms

// Task 6:
// function countOccurrences(str) {
//     let countCharacter = {}; // Here we will store character count

//     for (let index = 0; index < str.length; index++) {
//         let char = str[index]

//         // if a character is repeating itself
//         if (countCharacter[char]) { 
//             countCharacter[char]++
//         }
        
//         // for character that is not in our object
//         else{
//             countCharacter[char] = 1;
//         }
//     }
//     return countCharacter;
// }

// let inputStr1 = "Hello World!";
// const  resultCount =  countOccurrences(inputStr1);

// console.log(`Character count for string ${inputStr1} is :`, resultCount);



// Task 7:

// // Before task 7 a extra task, [finding all possible substrings]
// formula is (n*(n+1))/2 to find  number of substrings
// function allSubstrings(str) {
//     // an empty array to store all substrings
//     let possibleSubstrings = [];

//     // outer loop for start index
//     for (let i = 0; i < str.length; i++) {
        
//         // inner loop for end index
//         for (let j = i + 1; j <= str.length; j++) {
//             possibleSubstrings.push(str.slice(i,j));
//         }
//     }

//     return possibleSubstrings;
// }
// const str = "Ustad";
// console.log(allSubstrings(str));



// now actual Task 7:
// function longestSubstring(s) {
//     let map = {};
//     let start = 0; // start pointer
//     let maxLength = 0;

//     for (let end = 0; end < s.length; end++) {
//         let char = s[end];

//         // If character is found in map and it's index is within the current window
//         if (map[char] !== undefined && map[char] >= start) {
//             // Move the start pointer right after the last occurrence of the repeating character
//             start = map[char] + 1;
//         }

//         // Update the last seen index of the character
//         map[char] = end;

//          // Calculate the current window length and update maxLength if it's longer
//          maxLength = Math.max(maxLength, end-start +1);
//     }

//     console.log(maxLength);
    
// }

// longestSubstring("abcabcbb"); // Output: 3
// longestSubstring("bbbbb");    // Output: 1
// longestSubstring("pwwkew");   // Output: 3




// Activity 4: Array Algorithms

// Task 8:

function rotateArray(arr, k) {
    // Handle edge cases
    if (!Array.isArray(arr) || arr.length === 0 || k === 0) {
        return arr;
    }

    // Ensure k is positive and within array bounds
    k = ((k % arr.length) + arr.length) % arr.length;

    // Use array slicing for rotation
    return [...arr.slice(-k), ...arr.slice(0, -k)];
}

// Test cases
console.log(rotateArray([1, 2, 3, 4, 5], 2));  // Expected: [4, 5, 1, 2, 3]
console.log(rotateArray([1, 2, 3, 4, 5], 5));  // Expected: [1, 2, 3, 4, 5]
console.log(rotateArray([1, 2, 3, 4, 5], 7));  // Expected: [4, 5, 1, 2, 3]
console.log(rotateArray([1, 2, 3, 4, 5], -2)); // Expected: [3, 4, 5, 1, 2]
console.log(rotateArray([], 3));               // Expected: []
console.log(rotateArray([1], 1));              // Expected: [1]


