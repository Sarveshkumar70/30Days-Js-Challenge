// NOTE --------------------------------------------------
// In JavaScript, promises are executed immediately upon creation. If a promise is created outside of a loop and used within the loop, it will not generate new outcomes on each iteration but will reuse the result of the initial creation. To generate a new outcome on each iteration, create the promise inside the loop.
// Note for Future Use:

// When using promises within a loop, ensure to create the promise inside the loop to guarantee a new outcome for each iteration.


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
// const promiseTwo = new Promise(function (resolve,reject) {
//     let theErrorIs = true;

//     if (!theErrorIs) {
//         resolve({user : "Shaktimaan" , Passion : "Protecting people"})
//     } else{
//         reject("You got an error");
//     }
// })

// promiseTwo.then(function (user) {
//     console.log(user);
//     return user.Passion;
// })
// .then((user2)=>{  // return value gets passed here
//     console.log(user2);
// })
// .catch((err)=>{  // reject
//     setTimeout(()=>{
//         console.log(err);
//     },2000)
// })



// ### **Activity 2: Chaining Promises**

// Task 3:
// function fetchUserData() {

//     return new Promise(resolve =>{
//         setTimeout(() => {
//             resolve({id : 1,name: "John" });
//         }, 1000);
//     });
// }

// function fetchUserPosts(userId) {

//     return new Promise(resolve =>{
//         setTimeout(() => {
//             resolve(['Post1','Post2','Post3']);
//         }, 1500);
//     });
// }

// function fetchUserComments(postId) {

//     return new Promise(resolve =>{
//         setTimeout(() => {
//             resolve(['comment1', 'comment2']);
//         }, 1000);
//     });
// }

// console.log('starting data fetch');

// fetchUserData().
// then((user)=>{
//     console.log('Fetched user: ',user.name );
//     return fetchUserPosts(user.id);
// })
// .then((posts)=>{
//     console.log(`Fetched posts`, posts.length )
//     return fetchUserComments(posts[0]);
// })
// .then((comments)=>{
//     console.log(`fetched comments`, comments.length);
//     console.log("All data fetched correctly");
// })
// .catch(()=>{
//     console.log("An error occurred",error);
// })

// console.log('Data fetched initiated, waiting for results.....');



// ### **Activity 3: Using Async/Await**

// Task 4:
// function asyncPara(value, delay) {

//     return new Promise(resolve => {
//         setTimeout(() => resolve(value) , delay);
//     })
// }

// async function waitAndLog(promise) {
//     console.log("Starting to wait......");

//     try {
//         const result = await promise
//         console.log("The resolved value: ",result);

//     } catch (error) {
//         console.log("An error has occurred: ", error);
//     }
//     console.log("Operation completed");
// }

// console.log("Program started :");

// waitAndLog(asyncPara("Hello, async/wait",2000));

// console.log("Program continues...");



// Task 5:
// function asynReject(value, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new  Error(value));
//     }, delay);
//   });
// }

// async function waitAndLogWithErrorHandling(promise) {
//   console.log("Starting to wait......");

//   try {
//     const result = await promise
//     console.log("The resolved value is", result);
    
//   } catch (error) {
//     console.log("Error occurred", error.message);
// }
// console.log("Progarm ended");
// }

// console.log("Starting..");

// waitAndLogWithErrorHandling(asynReject("Hello, async/await error!",2000));

// console.log("Program continues");


// ### **Activity 4: Fetching Data from an API**



// Task 6:
// function getDataByPromise() {
//     const url = "https://randomuser.me/api/";

//     fetch(url)
//     .then( response =>{
//         if (!response.ok) {
//             throw new Error("HTTP error! status:", response.status)
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log("API response:", data);
//     })
//     .catch(error =>{
//         console.log("There was a problem with fetch operation:", error);
//     });
// }

// // call the function
// console.log("starting fetch data...");
// getDataByPromise();
// console.log("Data fetch initiated.");



// **Task 7**:
// async function getData() {
//     const url = "https://randomuser.me/api/";

//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`Response status: ${response.status}`);
//         }

//         const json = await response.json();
//         console.log(json);
//     } catch (error) {
//         console.error(error.message);
//         throw error;
//     }   
// }

// getData()
// .then(data => console.log(data))
// .catch(error => console.error("Error in main: ", error));


// ### **Activity 5: Concurrent Promises**

// Task 8:
// const promise1 = Promise.resolve(100);
// const promise2 = 1337;
// const problem3 = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         resolve("foo")
//     }, 1000);
// })

// Promise.all([promise1,promise2,problem3]).then(values =>{
//     console.log(values);
// })


// Task 9:
const promiseFirst = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("promiseFirst")
    }, 700);
} ) 

const promiseSecond = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("promiseSecond")
    }, 120);
} ) 

const promiseThird = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("promiseThird")
    }, 100);
} ) 

Promise.race([promiseFirst,promiseSecond,promiseThird]).then(value =>{
    console.log(value);
})
.catch(error => {
    console.log("An error has occurred: ",error);
})