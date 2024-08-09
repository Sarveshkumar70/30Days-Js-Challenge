// ### **Activity 1: Sorting Algorithms**

// Task 1:


// ### **Activity 2: Searching Algorithms**

// Task 4:
function linearSearch(arr,target,n) {
    for (let index = 0; index < n; index++) {
        if (arr[index] === target) {
            return index;
        }
    }

    return -1;
}

let myArray4 = [10,16,44,2,1121,21,0,1]

let searchElement = 11;
const indexIs = linearSearch(myArray4, searchElement, myArray4.length);
console.log(`The element ${searchElement} is at index ${indexIs} in array`);

