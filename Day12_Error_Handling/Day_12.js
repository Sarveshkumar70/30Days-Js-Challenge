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
