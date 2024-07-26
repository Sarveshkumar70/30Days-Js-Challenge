// *### *Activity 1: Understanding Promises**

// Task 1:
// console.log("Task 1");
// const promiseOne = new Promise(function (resolve, reject) {

//     setTimeout(()=>{
//         console.log("Asynch. task 1 completed");
//         resolve();
//     },2000)
// })

// promiseOne.then(function () {
//     console.log("Promise 1 consumed");
// })


// Task 2:
const promiseTwo = new Promise(function (resolve,reject) {
    let theErrorIs = true;

    if (!theErrorIs) {
        resolve({user : "Shaktimaan" , Passion : "Protecting people"})  
    } else{
        reject("You got an error");
    }
})

promiseTwo.then(function (user) {
    console.log(user);
    return user.Passion;
})
.then((user2)=>{  // return value gets passed here
    console.log(user2);
})
.catch((err)=>{  // reject
    setTimeout(()=>{
        console.log(err);
    },2000)
})
