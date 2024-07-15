// ## **Tasks/Activities:**


// ### **Activity 1: If-Else Statements**

// Task 1:
// let num1 = 2
// if (num1 === 0) {
//         console.log("Number is Zero");
// }
// else if(num1 > 0){
//         console.log("Number is positive");
// }
// else{
//     console.log("Number is negative");
// }

// Task 2:
// let age = 19

// if (age >= 18) {
//     console.log(`Person is eligible to vote`);
// }
// else {
//     console.log(`Person is not eligible to vote as age is ${age}`);
// }


// ### **Activity 2: Nested If-Else Statements**

// Task 3:
// let valNum1 = 110
// let valNum2 = 120
// let valNum3 = -3000

// if (valNum1 > valNum2) {
//     if (valNum1 > valNum3) {
//         console.log(`valNum1: ${valNum1} is largest of three number`);
//     }
//     else {
//         console.log(`valNum3: ${valNum3} is largest of three number`);
//     }
// }
// else if(valNum2 > valNum3){
//     console.log(`valNum2: ${valNum2} is largest of three number`);
// }
// else{
//     console.log(`valNum3: ${valNum3} is largest of three number`);
// }


// ### **Activity 3: Switch Case**

// Task 4:
// switch uses the strict equality comparison

// let dayCount = 2
// switch (dayCount){
//     case 1 :
//     console.log(`${dayCount} is Sunday`);
//     break;

//     case 2 :
//     console.log(`${dayCount} is Monday`);
//     break;

//     case 3 :
//     console.log(`${dayCount} is Tuesday`);
//     break;

//     case 4 :
//     console.log(`${dayCount} is Wednesday`);
//     break;

//     case 5 :
//     console.log(`${dayCount} is Thursday`);
//     break;

//     case 6 :
//     console.log(`${dayCount} is Friday`);
//     break;

//     case 7 :
//     console.log(`${dayCount} is Saturday`);
//     break;

//     default: 
//     console.log("Please enter number only from 1 to 7");
// }

// Task 5:
// let score = 100
// switch (Math.floor(score/10)) {
//     case 10:

//     case 9:
//         console.log("Grade 'A'");
//         break;    
//     case 8:
//         console.log("Grade 'B'");
//         break;    
//     case 7:
//         console.log("Grade 'C'");
//         break;    
//     case 6:
//         console.log("Grade 'D'");
//         break;       


//     default:
//         console.log("Grade is 'F'");
//         break;
// }


// ### **Activity 4: Conditional (Ternary) Operator**
//  Task 6:

let checkNum = 0;// if this semicolon is removed it will give error since it is immediately followed by ternary operator

// (checkNum % 2 === 0)? console.log("The number is even") : console.log("The number is odd")


// ### **Activity 5: Combining Conditions**
let checkYear = 2000;

if (checkYear % 4 !== 0) {
    console.log(`${checkYear} not a leap year`);
}
else if (checkYear % 100 !== 0) {
    console.log(`${checkYear} is a leap year`);
}
else if (checkYear % 400 === 0) {
    console.log(`${checkYear} is a leap year`);
}
else {
    console.log(`${checkYear} not a leap year`);
}

// logic for leap year
// 1. If a year is not divisible by 4, it's not a leap year.
// Example: 2023 is not divisible by 4, so it's not a leap year.

// 2. If a year is divisible by 4 but not by 100, it is a leap year.
// Example: 2024 is divisible by 4 but not by 100, so it is a leap year.

// 3. If a year is divisible by both 4 and 100, then:
//    a) If it's also divisible by 400, it is a leap year.
// Example: 2000 is divisible by 4, 100, and 400, so it is a leap year.
//     b) If it's not divisible by 400, it's not a leap year.
// Example: 1900 is divisible by 4 and 100, but not by 400, so it's not a leap year.