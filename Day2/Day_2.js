// Two approaches--------------------------------------------------------------
// first--------------------------------------------


// **Activity 1: Arithmetic Operations**

// Task 1:
// using functions for reusability
function addFunc(num1, num2) {
    console.log(num1 + num2);
}
addFunc(4, 5);

// Task 2: 
function subFunc(num1, num2) {
    console.log(num1 - num2);
}
subFunc(8, 9)

// Task 3:
function multiFunc(num1, num2) {
    console.log(num1 * num2);
}
multiFunc(4, 8)

// Task 4:
function divideFunc(num1, num2) {
    console.log(num1 / num2);
}
divideFunc(8, 2)

// Task 5:
function remainderFunc(num1, num2) {
    console.log(num1 % num2);
}
remainderFunc(8, 3)


// **Activity 2: Assignment Operators**

// Task 6:
let num3 = 4
num3 += 4;
console.log(num3);

// Task 7:
let num4 = 101
num4 -= 2;
console.log(num4);


// **Activity 3: Comparison Operators**

// Task 8:
let num5 = 18
let num6 = 10
console.log(num5 > num6);
console.log(num5 < num6);

// Task 9:
let num7 = 17
let num8 = 11
console.log(num7 >= num8);
num8 = 17
console.log(num7 <= num8);

// Task 10:
let num9 = 4
let str1 = '4'

console.log(`"==" results ${num9 == str1}`); // loose eqaulity, performs type conversion
console.log(`"===" results ${num9 === str1}`); // strict equality, does not perform any type conversion


// **Activity 4: Logical Operators**
// Task 11:
console.log((8 > 2) && (4 < 8)); // both conditions must be true for LogicalAnd ,for result to be true

// Task 12:
console.log((4 > 1) || (1 > 8)); // atleast one condition must be true for LogicalOR, for result to be true

// Task 13:
console.log(!(4 > 2));


// **Activity 5: Ternary Operator**
// Task 14:
let num10 = -8
num10 < 0 ? console.log(`${num10} is negative`) : console.log(`${num10} is positive`)



// Second approach
// ## Feature Request approach:

function ArithmeticOperations(val1, val2) {
    console.log(`Addition is: ${val1 + val2}`);
    console.log(`Subtraction is: ${val1 - val2}`);
    console.log(`Multiplication is: ${val1 * val2}`);
    console.log(`Division is: ${val1 / val2}`);
    console.log(`Remainder is : ${val1 % val2}`);
}
ArithmeticOperations(10, 2)


function CompareAndLogic(val1, val2) {
    console.log(`val1 is greater than val2 ${val1 > val2}`);
    console.log(`val1 is less than val2 ${val1 < val2}`);
    console.log(`val1 is greater than equal to  val2 ${val1 >= val2}`);
    console.log(`val1 is less than equal val2 ${val1 <= val2}`);
    console.log(`val1 is less than val2 ${val1 === val2}`);

    let number1 = 10;
    let number2 = 12;
    console.log(`Both numbers are Positive: ${(number1 > 0) && (number2 > 0)}`);
    console.log(`Atleat one is Positive: ${(number1 > 0) || (number2 > 0)}`);
    console.log(`First not positive: ${!(number1 > 0)} `);
}
CompareAndLogic(12, 10)