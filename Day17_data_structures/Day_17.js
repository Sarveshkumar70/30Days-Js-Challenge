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

list.add(1);
list.add(2);
list.add(3);
list.add(4);

list.display(); // 1 -> 2 -> 3 -> 4

console.log(list.remove()); // 4
list.display(); // 1 -> 2 -> 3

console.log(list.remove()); // 3
list.display(); // 1 -> 2 

console.log(list.remove()); // 2
list.display(); // 1 

console.log(list.remove()); // 1
list.display(); 







