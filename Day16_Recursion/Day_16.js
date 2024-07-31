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

// approach 1:(use above fn. to reverse the string and compare it with original string)

//  const palindromeString = "radalr"

//  const checkString = reverseString(palindromeString, palindromeString.length)

//  if (palindromeString === checkString ) {
//     console.log("string is plaindrome");
//  }else{
//     console.log("string is not plaindrome");
//  }


// approach 2:
// function checkPalindrome(str, start = 0, end = str.length - 1) {
//   // replace() with a regular expression

//   //  /[^a-zA-Z0-9]/g  Removes all characters that are not letters or numbers and  (empty string) is what we're replacing these characters with - effectively deleting them

//     // Base case: if this is the first call, preprocess the string
//   if (start === 0 && end === str.length - 1) {
//     str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
//     end = str.length - 1;  // Update end after preprocessing
//   }

//   // best case: if length of string is 0 or 1,it's a palindrome
//   if (start >= end) {
//     return true;
//   }

//   // If the characters at the start and end don't match, it's not a palindrome
//   if (str[start] !== str[end]) {
//     return false;
//   }

//   return checkPalindrome(str, start+1, end-1);  
// }

// console.log(checkPalindrome("A man, a plan, a canal: Panama")); // true
// console.log(checkPalindrome("race a car")); // false
// console.log(checkPalindrome("Was it a car or a cat I saw?")); // true
// console.log(checkPalindrome("hello")); // false



// **Activity 4: Recursive Search**

// Task 7:
// function binarySearch(arr,element,start = 0, end = arr.length-1) {

//    if (start > end) {
//       return -1;
//    }

//    const mid = Math.floor((start+end)/2);

//    if (arr[mid] === element) {
//       return mid;
//    }
//    else if (arr[mid] < element) {
//       return binarySearch(arr,element,mid+1,end);
//    }

//    return binarySearch(arr,element, start,mid-1);
// }

// const arr2 = [10,20,30,40,50,60,70]

// const targetElement = 30;
// console.log(`The element ${targetElement} is in index ${binarySearch(arr2,targetElement)}`);



// Task 8:

// function checkOccurences(arr,element,index = 0) {
//    if (index === arr.length) {
//       return 0;
//    }
//    else if (arr[index]  === element) {
//       return 1 + checkOccurences(arr, element, index+1); 
//    }

//    return checkOccurences(arr,element,index+1);
// }

// const arr3 = [10,20,30,40,20,20,50,20]
// const elementNum = 20
// console.log(`The total occurrences of elemet ${elementNum} in array  is ${checkOccurences(arr3,elementNum)} `);




// **Activity 5: Tree Traversal **

// Task 9:
// class treeNode {
//     constructor(value){
//        this.value = value;
//        this.left = null;
//        this.right = null;
//     }
//  }
 
//  // recursive function for in-order Traversal
//  function inOrderTraversal(node) {
 
//     // base condition : if the node is null, return
//     if (node === null) {
//        return;
//     }
 
//     // recursively traverse left subtree
//     inOrderTraversal(node.left);
    
//     console.log(node.value);
 
//     // recursively traverse right subtree
//     inOrderTraversal(node.right)
//  }
 
 
//     //        1
//     //     /     \
//     //    2       3 
//     //  /   \    /  \
//     // 4     5  6    7  
   
//  const root = new treeNode(1); 
 
//  root.left = new treeNode(2)
//  root.right = new treeNode(3)
 
//  root.left.left = new treeNode(4)
//  root.left.right = new treeNode(5)
 
//  root.right.left = new treeNode(6)
//  root.right.right = new treeNode(7)
 
//  console.log("In-order Traversal:");
//  inOrderTraversal(root);



// Task 10:
class treeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // fn. to get depth of tree
  function checkDepth(root) {
    if (root === null) {
      return 0;
    }
  
    const leftDepth = checkDepth(root.left);
    const rightDepth = checkDepth(root.right);
  
    return Math.max(leftDepth, rightDepth) + 1;
  }
  
  
  // test cases:
  function testCase1() {
    const root = new treeNode(1);
  
    root.left = new treeNode(2);
    root.right = new treeNode(3);
  
    root.left.left = new treeNode(4);
    root.left.right = new treeNode(5);
  
    root.right.left = new treeNode(6);
    root.right.right = new treeNode(7);
  
    return root;
  }
  
  
  function testCase2() {
    const root = new treeNode(1);
  
    root.left = new treeNode(2);
    root.right = new treeNode(3);
  
    root.left.left = new treeNode(4);
    root.left.left.left = new treeNode(5);
  
    return root;
  }
  
  const testtree1 = testCase1();
  const testtree2 = testCase2();
  const emptytree = null;
  
  
  console.log(`The depth of testtree1: ${checkDepth(testtree1)}`);
  console.log(`The depth of testtree2: ${checkDepth(testtree2)}`);
  console.log(`The depth of emptytree: ${checkDepth(emptytree)}`);
  
  