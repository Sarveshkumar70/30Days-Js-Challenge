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
//         return `ID_${lastId.toString().padStart(5,'0')}` ; // padStart (5, '0') adds '0' to start of lastId string making total length of 5
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
// let arr = [];

// for(let index = 0; index <5; index++){
//     arr[index] = function(){
//         console.log("The index in function is:",index);
//     }
// }

// console.log("Testing all functions");

// arr[0]()  // output : The index in function is: 0
// arr[1]()  // output : The index in function is: 1
// arr[2]()  // output : The index in function is: 2
// arr[3]()  // output : The index in function is: 3
// arr[4]()  // output : The index in function is: 4


// or using foreach
// arr.forEach((fn,index) =>{
//     console.log(`The function called at index: ${index}`);
//     fn()
// })



// **Activity 4: Module Pattern**

// Task 6:
// const createCollectionManager = () => {

//     // Private array to store items
//     let items = [];

//     return {
//         // add an item to the collection
//         addItem : (item) => {
//             items.push(item);
//             console.log(`The added item is : ${item}`);
//         },

//         // remove an item from the collection
//         removeItem: (item) =>{
//             const index = items.indexOf(item);

//             if (index !== -1) {
//                 items.splice(index,1)
//                 console.log(`Removed item: ${item}`);
//             }else{
//                 console.log(`Item not found: ${item}`);     
//             }
//         },

//         // listing all collection
//         listItems: () => {
//             if (items.length === 0 ) {
//                 console.log("The collection is empty");
//             }else{
//                 console.log("Items in collection:");
//                 items.forEach((item, index) =>{
//                     console.log(`${index +1 }. ${item}`);
//                 });
//             }
//         },

//         // get count of items
//         getCount(){
//             return items.length;
//         }
//     }
// }

// const myCollection = createCollectionManager()

// // adding item to collection
// myCollection.addItem('Kiwi');
// myCollection.addItem('Lychee');
// myCollection.addItem('Guava');
// myCollection.addItem('Blueberry');

// // printing all items in collection
// myCollection.listItems();

// // removing items from collection
// myCollection.removeItem('Guava');

// myCollection.listItems();

// // removing non-existent element
// myCollection.removeItem('Banana');

// // get length of collection
// console.log(`Total items: ${myCollection.getCount()}`);



// **Activity 5: Memoization**

// Task 7:
function memoize(fn) {

    const cache = {}; // Object to store previous results

    return function(...args){
        const key = JSON.stringify(args) // create a unique key based on fn. arguments
        if (cache[key]) { //// Check if result for these arguments is already in cache
            return cache[key];
        } 

        const result = fn(...args); // call the original fn. with arguments
        cache[key] = result; // Store the result in the cache
        return result;
    };    
}

// function slowFunction(x) {
//     console.log(`Computing...`);

//     return x*2;
// }

// Create a memoized version of the slowFunction
// const memoizedSlowFunction = memoize(slowFunction);

// console.log(memoizedSlowFunction(5)); // Logs: 'Computing...' and then 10
// console.log(memoizedSlowFunction(5)); // Logs: 10 (result from cache)
// console.log(memoizedSlowFunction(10)); // Logs: 'Computing...' and then 20
// console.log(memoizedSlowFunction(10)); // Logs: 20 (result from cache)



// Task 8:
function factorial(num) {    
    if (num == 0 || num == 1) {
        return 1
    }else{
        return num * factorial(num -1)
    }
}

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5)); // computes and log the result
console.log(memoizedFactorial(5)); // returns the cached result
console.log(memoizedFactorial(6)); // computes and log the result
