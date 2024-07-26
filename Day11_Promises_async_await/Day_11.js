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

function fetchUserData() {

    return new Promise(resolve =>{
        setTimeout(() => {
            resolve({is : 1,name: "John" });
        }, 1000);   
    });
}

function fetchUserPosts(userId) {

    return new Promise(resolve =>{
        setTimeout(() => {
            resolve(['Post1','Post2','Post3']);
        }, 1500);   
    });
}

function fetchUserComments(postId) {

    return new Promise(resolve =>{
        setTimeout(() => {
            resolve(['comment1', 'comment2']);
        }, 1000);   
    });
}

console.log('starting data fetch');

fetchUserData().
then((user)=>{
    console.log('Fetched user: ',user.name );
    return fetchUserPosts(user.id);
})
.then((posts)=>{
    console.log(`Fetched posts`, posts.length )
    return fetchUserComments(posts[0]);
})
.then((comments)=>{
    console.log(`fetched comments`, comments.length);
    console.log("All data fetched correctly");
})
.catch(()=>{
    console.log("An error occurred",error);
})

console.log('Data fetched initiated, waiting for results.....');