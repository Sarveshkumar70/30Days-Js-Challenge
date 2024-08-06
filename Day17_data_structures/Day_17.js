// ### **Activity 1: Linked List**

// Task 1:
class Node {
    constructor(data){
        this.data = data; // assign the values passed to constructor
        this.next = null; // reference to the next node , initially set to null
    }
}

// // assigning values
// const node1 = new Node(10)
// const node2 = new Node(20)
// const node3 = new Node(30)

// // Linking nodes 
// node1.next = node2
// node2.next = node3

// node 1's value & reference 
// console.log(node1.value); // VALUE OF node 1 - 10
// console.log(node1.next); // reference to next node


// Task 2:
class LinkedList {
    constructor(){
        this.head = null;
    }
    
    // Add a node to the end of the list
    add(data){
        const newNode = new Node(data)
        if (this.head === null) {
            this.head = newNode;
        }else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }


    // Remove a node from the end of the list\
    remove(){
        if (this.head === null) {
            return null; // List is empty
        }

        if (this.head.next === null) {
            const removeNode = this.head;
            this.head = null;
            return removeNode.data; // Only one node in the list
        }

        let current = this.head;
        while (current.next.next !== null) {
            current = current.next;
        }
        const removeNode = current.next;
        current.next = null;
        return removeNode.data;
    }

    // Display all nodes in the list
    display() {
        let current = this.head;
        let result = [];
        while (current !== null) {
            result.push(current.data);
            current = current.next;
        }
        console.log(result.join(' -> '));   
    }
}

const list = new LinkedList();

// list.add(1);
// list.add(2);
// list.add(3);
// list.add(4);

// list.display(); // 1 -> 2 -> 3 -> 4

// console.log(list.remove()); // 4
// list.display(); // 1 -> 2 -> 3

// console.log(list.remove()); // 3
// list.display(); // 1 -> 2 

// console.log(list.remove()); // 2
// list.display(); // 1 

// console.log(list.remove()); // 1
// list.display(); 



// ### **Activity 2: Stack**

// Task 3:
class Stack{
    #items;

    constructor(){
        this.#items = [];
    }

    // Methods
    
    // returns true if stack is empty
    isEmpty(){
        return (this.#items.length === 0) 
    }

    // push (add element)
    push(element){
        this.#items.push(element)
        return this.#items.length; // returns length of stack 
    }
    
    // pop(element)
    pop(){
        if (this.isEmpty()) {
            return "Stack is empty"
        }
        return this.#items.pop() // pops element
    }

    // checks top element of stack
    peek(){
        if (this.isEmpty()) {
            return "No element in Stack"
        }

        return this.#items[this.#items.length-1]
    }


    // check size of stack
    sizeOfStack(){
        return this.#items.length
    }

    // clear all previous elements
    clearStack(){
        this.#items = []
    }

    print(){
        console.log(this.#items.toString());
    }
    
}

// const stackVar1 = new Stack()

// // size of stack
// console.log(stackVar1.sizeOfStack()); // 0

// // Pushing elements into stack
// console.log(stackVar1.push(10)); // 1
// console.log(stackVar1.push(20)); // 2
// console.log(stackVar1.push(25)); // 3
// console.log(stackVar1.push(30)); // 4
// console.log(stackVar1.push(40)); // 5

// // Popping elements
// console.log(stackVar1.pop()); // 40
// console.log(stackVar1.pop()); // 30

// // Peeking top element
// console.log(stackVar1.peek()); // 25

// // Logs this string representation of the stack's contents to the console
// stackVar1.print() // 10, 20 ,25


// // stack refreshed
// stackVar1.clearStack();

// console.log(stackVar1.pop()); // Stack is empty

// console.log(stackVar1.isEmpty()); // true

// console.log(stackVar1.sizeOfStack()); // 0


// Task 4:
function reverseStringFn(str) {
    const stackVar2 = new Stack();

    let reverseString = '';

    // push our string into stack
    for (let character of str) {
        stackVar2.push(character)
    }

    // Empty string
    while (!stackVar2.isEmpty()) {
        reverseString += stackVar2.pop()
    }

    return reverseString;
}

const originalString = "Hello, World!";
console.log("Original :", originalString);
console.log("Reversed :", reverseStringFn(originalString));



// ### **Activity 3: Queue**

// Task 5:
class Queue{

    #items;

    constructor() {
        this.#items = []
    }

    enqueue(element){
        this.#items.push(element);
    }

    dequeue(){
        if (this.isEmpty()) {
            return null;
        }
        return this.#items.shift(); // pops starting element;
    }

    front(){
        if (this.isEmpty()) {
            return null;
        }
        return this.#items[0];
    }

    isEmpty(){
        return (this.#items.length === 0) 
    }
}

const queue1 = new Queue();

// adding element
queue1.enqueue(10);
queue1.enqueue(20);
queue1.enqueue(30);
queue1.enqueue(40);

// removing elements
console.log(queue1.dequeue());// 10
console.log(queue1.dequeue());// 20
console.log(queue1.dequeue());// 30
// console.log(queue1.dequeue());// 40
// console.log(queue1.dequeue());// null


// view the first element
console.log(queue1.front()); 



// Task 6:
const printerQueue = new Queue();

// Adding print jobs to printer
printerQueue.enqueue('Print Job 1');
printerQueue.enqueue('Print Job 2');
printerQueue.enqueue('Print Job 3');


while (!printerQueue.isEmpty()) {
    const job = printerQueue.dequeue();
    console.log(`Processing : ${job}`);
}

console.log("No more print jobs in the QUEUE");
    















