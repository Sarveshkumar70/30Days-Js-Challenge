// **Activity 1: Understanding Closures**

// Task 1:
// function outerFunction(var1) {
//     let var2 = 10;

//     function innerFunction() {
//         console.log(var1 + var2);
//     }

//     return innerFunction;
// }

// const callFn1 = outerFunction(20);

// callFn1();


// Task 2:
// function closureFunction() {
//     let counter = 0;

//     return {
//         // maintains a private counter
//         increment(){
//             counter++
//             return counter;
//         },

//         // To get the current value of the counter
//         getValue(){
//             return counter
//         }
//     }  
// }

// const closureFn = closureFunction();

// // increment 
// console.log(closureFn.increment())
// console.log(closureFn.increment())

// // getting value of counter
// console.log(closureFn.getValue())



// **Activity 2: Practical Closures**

// Task 3:
// function createUniqueId() {
//     let lastId = 0;

//     // fn. that increments with each call
//     return function () {
//         lastId++;
//         return `ID_${lastId.toString().padStart(5,'0')}`// padStart (5, '0') adds '0' to start of lastId string making total length of 5
//     }
// }

// // calling fn. for unique Id
// let uniqueId = createUniqueId();

// console.log(uniqueId());  // ID_00001
// console.log(uniqueId());  // ID_00002
// console.log(uniqueId());  // ID_00003
// console.log(uniqueId());  // ID_00004



// Task 4:
// function returnUser(userName) {

//     return function () {
//         console.log(`Hello! ${userName}`);
//     }
// }

// const greetings1 = returnUser("Rammu");
// const greetings2 = returnUser("Lasan");

// greetings1(); // Hello! Rammu
// greetings2(); // Hello! Lasan



// **Activity 3: Closures in Loops**

// Task 5:
let arr = [];

for(let index = 0; index <5; index++){
    arr[index] = function(){
        console.log("The index in function is:",index);
    }
}

console.log("Testing all functions");

// arr[0]()  // output : The index in function is: 0
// arr[1]()  // output : The index in function is: 1
// arr[2]()  // output : The index in function is: 2
// arr[3]()  // output : The index in function is: 3
// arr[4]()  // output : The index in function is: 4


// or using foreach
arr.forEach((fn,index) =>{
    console.log(`The function called at index: ${index}`);
    fn()
})


