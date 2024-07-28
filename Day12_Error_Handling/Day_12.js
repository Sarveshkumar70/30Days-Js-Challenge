// **Activity 1: Basic Error Handling with Try-Catch**

// Task 1:
// function checkError(age) {

//     if (age >= 18) {
//         console.log("The age is greater than or equal to 18");
//     }else{
//         throw new Error("Age is below 18");;
//     }
// }

// try {
//     checkError(15);
// } catch (error) {
//     console.error("Caught an error :",error.message);
// }

// Task 2:
// function checkDivision(numerator, denominator) {

//     if (denominator !== 0) {
//         return (numerator/denominator);
//     }else{
//           throw new Error("Denominator is equal to zero");
//     }
// }

// try {
//     console.log("Result :",checkDivision(10,0));
//     // console.log("Result :",checkDivision(10,2));
//     console.log("This line won't be executed if an error is thrown");
// } catch (error) {
//     console.error(error.message);
// }

// **Activity 2: Finally Block**

// Task 3:
// function checkForVoteEligibilty(age) {
//     if (age>=18) {
//         console.log("The person can vote since his age is : ",age);
//     }
//     else{
//         throw new Error("The person cannot vote since his age is :" + age);
//     }
// }

// try {

//     console.log("Exection flow is in try");
//     // checkForVoteEligibilty(6);
//     checkForVoteEligibilty(26);
//     console.log("This line in try won't be executed if an error is thrown");

// } catch (error) {
//     console.log("Exection flow is in catch");
//     console.error(error.message);
//     console.log("Line in catch after error");

// } finally{
//     console.log("Exection flow is in finally block");
// }

// **Activity 3: Custom Error Objects**

// Task 4:

// custom error class
// class InvalidAgeError extends Error{
//     constructor(message){
//         super(message);
//         this.name = "InvalidAgeError";
//     }
// }

// function to validate age
// function validateAge(age) {
//     if (typeof (age) !== 'number' || age < 0 || age > 120)  {
//         throw new InvalidAgeError("Invalid age: age must be number between 0 and 120");
//     }
//     return `Age ${age} is valid`;
// }

// function with try catch block
// function checkAge(ageToCheck) {
//     try {
//         const result = validateAge(ageToCheck) ;
//         console.log(result);
//     } catch (error) {
//         if (error instanceof InvalidAgeError ) {
//             console.error(`Caught an InvalidAgeError: ${error.message}`);
//         }
//         else{
//             console.error("Unexpected error : ", error.message);
//         }
//     }
// }

// console.log("Testing with valid age:");
// checkAge(16);

// console.log("Testing with Unvalid age:");
// checkAge(216);

// console.log("Testing with non number input:");
// checkAge("lol");

// Task 5:

// custom error class
// extends Error means that InvalidStringError inherits from JavaScript's built-in Error class.
class InvalidStringError extends Error {
  constructor(message) {
    super(message); // super calls the constructor of the parent class (in this case, Error).
    this.name = "InvalidStringError";
  }
}

// function for checking input string is valid or not
function checkForString(input) {
  if (typeof input !== "string") {
    throw new TypeError("Input must be string!");
  } else if (input.trim().length === 0) {
    throw new InvalidStringError(
      "If input is empty string or has only whitespace"
    );
  } else {
    console.log("Input string is VALID");
  }
}

function takeInput(input) {
  try {
    checkForString(input);
    console.log("This line in try won't be executed if an error is thrown");
  } catch (error) {
    if (error instanceof TypeError) {
      console.log("TypeError :", error.message);
    } else if (error instanceof InvalidStringError) {
      console.log("InvalidStringError :", error.message);
    } else {
      console.log("Unexpected error :", error.message);
    }
  }
}

// console.log("case 1: valid string");
// takeInput("Hello")

// console.log("case 2: Other datatype");
// takeInput(45)

// console.log("case 3: Empty strings");
// takeInput("")

// console.log("case 3: String with whitespaces");
// takeInput("        ");



// **Activity 4: Error Handling in Promises**

// Task 6:

// fn. which generates random number
const randomNum = (min, max) => Math.floor( Math.random() * (max - min + 1)) + min;

// randomly resolves or rejects promise
const randomPromise = new Promise((resolve, reject) => {
    const random = randomNum(1,2);

    if (random === 1) {
        resolve("Success! The random number is 1")
    }else{
        reject(new Error("Failed! The random number is 2"));
    }
}) ;


randomPromise.then((result) =>{
    console.log("Promise resolved, ",result);
})
.catch((error)=>{
    console.log("Promise rejectd ,",error.message );
})
.finally( () =>{
    console.log("Promise settled : either resolved or rejected");
})

// In JavaScript, promises are executed immediately upon creation. If a promise is created outside of a loop and used within the loop, it will not generate new outcomes on each iteration but will reuse the result of the initial creation. To generate a new outcome on each iteration, create the promise inside the loop.

// Note for Future Use:
// When using promises within a loop, ensure to create the promise inside the loop to guarantee a new outcome for each iteration.


// NOTE : The result may be unexpected with below loop because the loop executes synchronously, logging the attempt numbers immediately. However, the promises resolve or reject asynchronously, which results in the resolution and rejection logs appearing after all attempts have been logged.
// To ensure that the logs appear in the expected order (i.e., each attempt number followed by its corresponding promise resolution or rejection), you need to handle the promises asynchronously within the loop.


// for (let i = 1; i <= 5; i++) {
//     console.log("Attempt i = ",i);

//     const randomPromise = new Promise ((resolve, reject) =>{
//         const random = randomNum(1,2)

//         if (random === 1) {
//             resolve("Success! The random number is 1")
//         }else{
//             reject(new Error("Failed! The random number is 2"));
//         }
//     })
//     randomPromise
//     .then((result) =>{
//         console.log(result);
//     })
//     .catch((error)=>{
//         console.log(error.message );
//     })
// }





