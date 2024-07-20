// ## Activity 1: Object Creation and Access

// Task 1:
let myBook = {
    title: "The Complete Novels of SHERLOCK HOLMES ",
    author: "Sir Arthur Conan Doyle",
    year: 2022
}

// console.log(myBook);


// Task 2:
// console.log(myBook.title) 

// console.log(myBook["author"]); // another method for accessing


// ##  Activity 2: Object Methods
// Task 3:
let myBook2 = {
    title: "To KIll a MockingBird ",
    author: "Harper lee",
    year: 1960,

    InfoAboutBook: function () {
        return `The Title of Book is ${this.title} published by author ${this.author}`;
    }
}
// console.log(myBook2.InfoAboutBook());


// Task 4:
myBook2.updateYear = function (year) {
    this.year = year;
    return (this.year);
}

// console.log(myBook2.updateYear(2000));


// ## *Activity 3: Nested Objects
// Task 5:
const library = {
    name: "The knowledge Store",

    books: [
        {
            title: "The Complete Novels of SHERLOCK HOLMES ",
            author: "Sir Arthur Conan Doyle",
            year: 2022
        },

        {
            title: "To KIll a MockingBird ",
            author: "Harper Lee",
            year: 1960
        }
    ]
}

// console.log(library);


// Task 6:
// console.log(`The name of the library is "${library.name}"`);

// library.books.forEach( (books) => console.log(books.title));

// same as above
// console.log(library.books[0].title);
// console.log(library.books[1].title);



// ##  Activity 4: The `this` Keyword
// Task 7: 
let myBook3 = {

    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,

    bookDetail () {
        return `The Book's title is ${this.title} and it was published in year ${this.year}`;
    }

}

// console.log(myBook3.bookDetail());


// ## Activity 5: Object Iteration
// Task 8:
// for (const key in myBook3){
//     console.log(`${key}:${myBook3[key]}`);
// }


// Task 9:
const objKeys = Object.keys(myBook3);  // object keys
// console.log(objKeys);
// console.log(typeof objKeys);


const objvalues = Object.values(myBook3)
console.log(objvalues);
