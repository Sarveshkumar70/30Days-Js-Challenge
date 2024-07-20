// ### **Activity 1: Template Literals**

// Task 1:
// let name = "Rahul";
// let age = 22;
// console.log(`His name is ${name} and he is ${age} years old.`);


// Task 2:
// console.log(`This is the first line.
// This is second line.
// This is Third line`);


// ### **Activity 2: Destructuring**

// Task 3:
let myArray3 = [10,20,30,40,50,60];

let a,b;

[a,b] = myArray3;

// console.log(`a: ${a} & b: ${b}`);

// console.log(myArray3); // o/p is [ 10, 20, 30, 40, 50, 60 ]


// Task 4:
const myBook = {
    title: "The Complete Novels of SHERLOCK HOLMES ",
    author: "Sir Arthur Conan Doyle",
    year: 2022
}

const {title, author} = myBook;

// console.log(title);
// console.log(author);


// ### **Activity 3: Spread and Rest Operators**

// Task 5:
let oldArray = [10,20,30,40,50];

let element6= 60;
let element7= 70;

const newArray = [...oldArray, element6, element7];
// console.log(newArray);


// Task 6:
function sumNumber(a, b, ...arbitrary) {
    return (a + b + arbitrary.reduce( (sum, num) => sum+num,0) );
}

// console.log(sumNumber(1,2,3,4,5,6,7,8,9,10));


// ### **Activity 4: Default Parameters**
function productFunc(val1 , val2 =1) {
    return val1*val2;   
}

console.log(productFunc(10,20)); // With both parameters
console.log(productFunc(10)); // one parameter

// This demonstrates how the function works both when two arguments are provided and when only one is provided. In the second case, it uses the default value for the second parameter. In first case, default value gets overwritten by the second parameter



// ### **Activity 5: Enhanced Object Literals**

// Task 8:

