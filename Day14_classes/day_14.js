// ### Activity 1: Class Definition

// Task 1:
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    greetings(){
        console.log(`Hello! my self ${this.name} & my age is ${this.age}`);
    }

    // Task 2:
    updateAgeInClass(newAge){
        this.age = newAge;
        console.log(`Updated age is ${this.age}`);
    }
}

const person1 = new Person("Alex",15);

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

    constructor(name,age,studentId){
        super(name,age) // calls the parent class contructor
        this.studentId = studentId;
    }

     returnStudentID() {
        return this.studentId;
    }
}

const studentInstance = new Student("Nimbu",18,124242);

console.log(studentInstance.returnStudentID());
