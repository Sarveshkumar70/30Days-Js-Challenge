// **Activity 1: Basic Recursion**


// Task 1:

// const input = 6
// function FactorialOfNum(num) {
//     if (num <= 1) {
//         return 1;
//     }
//     else{
//         return num * FactorialOfNum(num-1);
//     }
// }

// console.log(`The factorial of number ${input} is ${FactorialOfNum(input)}`);



// Task 2:
// Fibonacci series
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ……..

// function fibonacciSeries(num) {
//     if (num  == 0) {
//         return 0;
//     }else if (num == 1) {
//         return 1;
//     }
//     else{
//         return fibonacciSeries(num -1) + fibonacciSeries(num -2);
//     }
// }

// console.log(fibonacciSeries(5));



// **Activity 2: Recursion with Arrays**

// Task 3:
// const myArray1 = [10,20,30,40,50]

// function getSum(myArray) {
//     if (myArray.length === 0) {
//         return 0;
//     }
    
//     return myArray[0] + getSum(myArray.slice(1))
// }

// console.log("Sum of all elements of Array is:",getSum(myArray1));


// Task 4:
// function getMaximumElement(myArray,n) {

//    if (n === 1) {
//       return myArray[0]; // returning the last element [0]th if n = 1 
//    }
//    return Math.max(myArray[n-1],getMaximumElement(myArray,n-1));
// }

// const myArray2 = [120,1,0,21,400,4]
// const maxNum = getMaximumElement(myArray2, myArray2.length);

// console.log(`The maximum element of Array is: ${maxNum}`);



// **Activity 3: String Manipulation with Recursion**


// Task : 5
// function reverseString(myString,n) {
//     if (n === 1) {
//        return myString[0];
//     }
    
//      return myString[n-1] + reverseString(myString, n-1);
//  }
 
 // case 1:
 // const myString = "does this work !#";
 
 // case 2:
 // const myString = "";
 
 // if (myString.length > 0) {
 //    const newString = reverseString(myString,myString.length)
    
 //    console.log(`The reverse of string ${myString} is: ${newString}`);   
 // }else{
 //    console.log("Do not enter an Empty string");
 // };
 
 
 
 
// Task 6:

 // approach 1
//  const palindromeString = "radalr"
 
//  const checkString = reverseString(palindromeString, palindromeString.length)
 
//  if (palindromeString === checkString ) {
//     console.log("string is plaindrome");
//  }else{
//     console.log("string is not plaindrome");
//  }
 
 // approach 2
 
 
 
 