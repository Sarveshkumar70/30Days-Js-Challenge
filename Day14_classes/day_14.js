// ### Activity 1: Class Definition

// Task 1:
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greetings() {
    console.log(`Hello! my self ${this.name} & my age is ${this.age}`);
  }

  // Task 2:
  updateAgeInClass(newAge) {
    this.age = newAge;
    console.log(`Updated age is ${this.age}`);
  }

  // Task 5:
  // static method
  static genericgreet() {
    return "Namaste ustad jii!";
  }
}

const person1 = new Person("Alex", 15);

// person1.greetings();

// Task 2:
// ---
// below code only adds updateAge method to person1 instance,but not to class Person, so to do that add fn. to class directly
// person1.updateAge = function (age) {
//     this.age = age
//     console.log(`Upadted age is ${this.age}`);
// }
// person1.updateAge(45)
// ---

// correct one for task 2->
// person1.updateAgeInClass(45);

// ### Activity 2: Class Inheritance

// Task  3:
class Student extends Person {
  // static property
  static numOfStudents = 0;

  constructor(name, age, studentId) {
    super(name, age); // calls the parent class contructor
    this.studentId = studentId;
    Student.numOfStudents++; // for task 6
  }

  returnStudentID() {
    return this.studentId;
  }

  // Task 4: override the greeting method
  greetings() {
    super.greetings(); // calling parent's fn.
    // adding additional information
    console.log(`The student id is: ${this.studentId}`);
  }

  // for task 6: A static method to keep track of static property
  static trackProperty() {
    console.log(
      `The number of time static property numOfStudents called is ${Student.numOfStudents}`
    );
  }
}

const studentInstance = new Student("Nimbu", 18, 124242);

// console.log(studentInstance.returnStudentID());

// Task 4:
studentInstance.greetings();

// ### Activity 3: Static Methods and Properties

// Task 5:
// console.log(Person.genericgreet());

// Task 6:
const num1 = new Student("Pappu", 55, 101212);
const num2 = new Student("David", 10, 88954);
const num3 = new Student("Maggie", 22, 36945);

Student.trackProperty(); // 4, first is called by instance studentInstance

// ### Activity 4: Getters and Setters
// using Person2 instead of Person[class exists]
// to avoid complexity

// --------------------------------------------------------

// example of how to use getter, setter
// class Person2 {
//     constructor(name, age) {
//         this._name = name;  // Use an underscore to indicate "private" properties
//         this._age = age;
//     }

//     // for name

//     // getter method
//     get name(){
//         return this._name;
//     }

//     // setter
//     set name(newName){
//         if (typeof newName === "string" && newName.length > 0) {
//             this._name = newName;
//         }else{
//             console.log('Invalid name');
//         }
//     }

//     // for age

//     // getter method
//     get age(){
//         return this._age;
//     }

//     // setter
//     set age(newAge){
//         if (typeof newAge === "number" && newAge > 0) {
//             this._age = newAge;
//         }else{
//             console.log('Invalid Age');
//         }
//     }

//     printProperties(){
//         console.log(`The name is ${this._name} & age is ${this._age}`);
//     }
// }

// // instance of Person2
// const instance1 = new Person2("Lily",28);

// // use getters to access property
// console.log(instance1.name); //getters are accessed like properties, not like methods. getters are accessed like properties, not like methods.
// console.log(instance1.age);

// // use setters to modify properties[w/o parenthesis,()]
// instance1.name = "Bhuvi"
// instance1.age = 21

// console.log(instance1.name);
// console.log(instance1.age);

// // now with invalid properties
// instance1.name = ""
// instance1.age = -55

// instance1.printProperties()

// -------------------------------------------------------------

// Task 7 & 8
class Person3 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(newFullName) {
    const [firstName, lastName] = newFullName.split(" ");
    this.firstName = firstName || this.firstName;
    this.lastName = lastName || this.lastName; //  keep old if split fails
  }
}

// creating instance of class
const personInstance = new Person3("Harry", "Singh");

// logging the full name using the getter.
console.log(personInstance.fullName);

personInstance.fullName = "Baba ramu"

console.log(personInstance.fullName);
