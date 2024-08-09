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


// ### **Activity 4: Binary Tree**

// Task 7:
class TreeNode {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// let root = new TreeNode(10);
// root.left = new TreeNode(45);
// root.right = new TreeNode(4);

//       10
//      /  \
//     45   4



// Task 8:
class BinaryTree{
    constructor(){
        this.root = null;
    }

    // inserting values
    insert(value){

        const newNode = new TreeNode(value);

        if (this.root === null) {
            this.root = newNode;
            return;
        }

        this.insertNode(this.root, newNode);
    }

    insertNode(node,newNode){

        if (node.value > newNode.value) {
            if (node.left === null) {
                node.left = newNode;
            }
            else{
                this.insertNode(node.left,newNode)
            }
        }

        else{
            if (node.right === null ) {
                node.right = newNode;
            }
            else{
                this.insertNode(node.right,newNode)
            }
        }  
    }


    // Traversal
    inOrderTraversal(node = this.root){
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }
}

const binaryTreeVar = new BinaryTree();

binaryTreeVar.insert(5)
binaryTreeVar.insert(6)
binaryTreeVar.insert(1)
binaryTreeVar.insert(7)
binaryTreeVar.insert(8)

console.log("In-order Traversal:");

binaryTreeVar.inOrderTraversal();
    


// ### **Activity 5: Graph (Optional)**

// Task 9 & 10:
class Graph{
    constructor(){
        this.adjacencyList = new Map()
    }

    // Methods

    addVertex(vertex){
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex,[])
        }
    }


    addEdge(vertex1, vertex2){
        this.addVertex(vertex1);  // This ensures that both vertices exist in the graph before we try to connect them
        this.addVertex(vertex2); 

        this.adjacencyList.get(vertex1).push(vertex2);
        this.adjacencyList.get(vertex2).push(vertex1);
    }


    breadthFirstSearch(startVertex){
        const visited = new Set(); //  A Set to keep track of vertices we've already visited
        const queue = [startVertex]; // An array used as a queue to manage the order of vertex exploration. We start with the startVertex.
        const result = []; // An array to store the order in which we visit the vertices.

        visited.add(startVertex);

        while (queue.length > 0) {
            const currentVertex = queue.shift();
            result.push(currentVertex);

            for (const neighbor of this.adjacencyList.get(currentVertex)) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }

        return result;
    }


    shortestPath(start, end) {
        const visited = new Set();
        const queue = [[start]];
        visited.add(start);

        while (queue.length > 0) {
            const path = queue.shift();
            const vertex = path[path.length-1];

            if (vertex === end) {
                return path;
            }

            for (const neighbor of this.adjacencyList.get(vertex)) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push([...path, neighbor]);   
                }   
            }
        }

        return null;
    }
}


const graph = new Graph();

graph.addEdge('A','B');
graph.addEdge('A','C');
graph.addEdge('B','D');
graph.addEdge('C','E');
graph.addEdge('D','E');
graph.addEdge('D','F');
graph.addEdge('E','F');

console.log(graph.breadthFirstSearch('A'));
console.log(graph.shortestPath("A","F"));

