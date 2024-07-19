// ACTIVITY 1 : Variable declaration
// TASK 1 :
var num1 = 10
console.log(num1);

// TASK 2 :
let str1 = "HELLO Cutie!" 
console.log(str1);


// ACTIVITY 2 : Constant declaration
// TASK 3 :
const boolValue = true
console.log(boolValue); 


// ACTIVITY 3 : Data types
// TASK 4 : 

let num2 = 20;
console.log(`${num2} is` ,typeof(num2));

let str2 = "HomeLander"
console.log(`${str2} is`, typeof(str2));

let boolValue2 = false
console.log(`${boolValue2} is`, typeof(boolValue2));

const obj1 = {
    nameIs : "Pandey",
    rollNum : 25,
}
console.log( obj1 , " is ", typeof(obj1));

let myArray = [45,46,48,"Aloo"]
console.log(`${myArray} is`, typeof(myArray));


// ACTIVITY 4 : Reassigning variables
// TASK 5 :
let initialVal = 88;
console.log(initialVal);

initialVal = "Hello"
console.log(initialVal);


// ACTIVITY 5 : Understanding const 
// TASK 6 :

const permanentVal = 100;
// permanentVal = 200;   //  TypeError: Assignment to constant variable.
console.log(permanentVal);