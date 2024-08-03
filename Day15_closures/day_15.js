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
function closureFunction() {
    let counter = 0;

    return {
        // maintains a private counter
        increment(){
            counter++
            return counter;
        },

        // To get the current value of the counter
        getValue(){
            return counter
        }
    }  
}

const closureFn = closureFunction();

// increment 
console.log(closureFn.increment())
console.log(closureFn.increment())

// getting value of counter
console.log(closureFn.getValue())
