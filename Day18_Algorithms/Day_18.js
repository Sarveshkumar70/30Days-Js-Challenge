// ### **Activity 1: Sorting Algorithms**

// Task 1:


// ### **Activity 2: Searching Algorithms**

// Task 4:
// function linearSearch(arr,target,n) {
//     for (let index = 0; index < n; index++) {
//         if (arr[index] === target) {
//             return index;
//         }
//     }

//     return -1;
// }

// let myArray4 = [10,16,44,2,1121,21,0,1]

// let searchElement = 11;
// const indexIs = linearSearch(myArray4, searchElement, myArray4.length);
// console.log(`The element ${searchElement} is at index ${indexIs} in array`);


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

// // Task 8:
// function rotateArray(array, k) {
//     // if (position === 0) {
//     //     console.log("Nothing changes in array");
//     //     return array;
//     // }

//     let n = array.length;

//     k = k % n

//     // for reversing whole array
//     reverseArray(array, 0, n-1);
    
//     // for reversing first k-1 elements
//     reverseArray(array, 0, k-1);
    
//     // for reversing elements after k
//     reverseArray(array, k, n-1);

//     console.log(array);
// }

// function reverseArray(arr, start, end) {
//     while (start < end) {
        
//         let temp = arr[start];
//         arr[start] = arr[end];
        
//         arr[end] = temp;
        
//         start++;
//         end--;
//     }
// }

// const array8 = [10,20,30,40,50,60,70];
// rotateArray(array8,2)



// Task 9:
// function mergeArray(arrA, arrB) {
//     // initializing array to store two merged arrays into new one
//     let arrResult = [];

//     // length of both arrays
//     let m = arrA.length;
//     let n = arrB.length;

//     let i = j = k = 0;


//     // This loop runs until one of the arrays (arrA or arrB) is fully traversed.
//     while (i < m && j < n) {
//         if (arrA[i] <= arrB[j]) {
//             arrResult[k++] = arrA[i++];
//         }
//         else if (arrA[i] > arrB[j]) {
//             arrResult[k++] = arrB[j++]
//         }
//     }

//     // for remaining elements left in any array
//     while (i < m) {
//         arrResult[k++] = arrA[i++]
//     }

//     while (j < n) {
//         arrResult[k++] = arrB[j++]
//     }
//     console.log(arrResult);
   
// }

// let arrA = [20,40,50,90,100]
// let arrB = [10,30,40,60,70,120,125,300]

// mergeArray(arrA,arrB) // [
//                       //     10,  20,  30, 40,  40,
//                       //     50,  60,  70, 90, 100,
//                       //    120, 125, 300
//                       //  ]


