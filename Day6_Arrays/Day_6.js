// ### Activity 1: Array Creation and Access

// NOTE : EVERY TASK HAS ITS OWN ARRAY, TO MAINTAIN readability, easiness. 

// Task 1:
let myArray1 = [1, 2, 3, 4, 5];
// console.log(myArray1);

// Task 2:
// let myArray2 = ["Ram", "Sham", "Pappu", "Pinky", "Mamta"];
// console.log(myArray2[0]);

// let lastValue = myArray2[myArray2.length-1];  // for accessing last element
// console.log(lastValue);


// ### Activity 2: Array Methods (Basic)

// Task 3: 

// let myArray3 = [2,4,6,8,10];
// myArray3.push(12);  // adding new element
// console.log(myArray3);


// Task 4:

// let myArray4 = [2,4,6,8,10];
// myArray4.pop();
// console.log(myArray4);


// Task 5:

// let myArray5 = [2,4,6,8,10];
// myArray5.shift();
// console.log(myArray5);


// Task 6:

// let myArray6 = [1,2,3,4,5];
// myArray6.unshift(6);
// console.log(myArray6);



// ### Activity 3: Array Methods (Intermediate)

// Task 7: 
// let oldArray = [3,6,9,12,15]
// let newArray = oldArray.map( (numbers) => numbers * 2 )
// console.log(newArray);


// Task 8



// Task 9:
// let array8 = [1,2,3,4,5,6,7,8,9,10]

// let sumOfElements = array8.reduce( (acc, currentVal) =>  {
//     return (acc + currentVal);
// }, 0);
// console.log(sumOfElements);


// ### Activity 4: Array Iteration

// Task 10:
// let myArray10 = [11,12,13,14,15,16];

// for(let i =0; i < myArray10.length ; i++){
//     console.log(myArray10[i]);
// }


// Task 11:

let array11 = [10, 20, 30, 40, 50];

array11.forEach(function(numbers){
    console.log(numbers);
})