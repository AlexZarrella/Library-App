const mongoose = require('mongoose');
const Book = require('../models/book');
const Author = require('../models/author');

const dbName = 'library-app';
mongoose.connect(`mongodb://localhost/${dbName}`);


//  name: String,
// lastName: String,
// nationality: String,
// birthday: String,

const jrr = {_id: new mongoose.Types.ObjectId(), 
  name: "JRR", 
  lastName: "Tolkien", 
  nationality: "British", 
  birthday: "01/03/1892"
}
const george = {_id: new mongoose.Types.ObjectId(), 
  name: "George", 
  lastName: "Orwell", 
  nationality: "British", 
  birthday: "06/25/1903"
}


const authors = [jrr, george];

const books = [
  {
    title: "The Hunger Games",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: jrr._id,
    rating: 10
  },
  {
    title: "Harry Potter",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: jrr._id,
    rating: 9
  },
  {
    title: "To Kill a Mockingbird ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: george._id,
    rating: 8
  },
  {
    title: "Pride and Prejudice ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: george._id,
    rating: 9
  },
  {
    title: "Animal Farm",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: george._id,
    rating: 9
  }
]

Author.create(authors)
.then((response)=>{
  console.log(`created ${response.length} authors`)
  
  Book.create(books)
  .then((result)=>{
    console.log(`created ${result.length} books`)
    // mongoose.disconnect();
})
.catch((err)=>{
    console.log(err)
})

})
.catch((err)=>{
  console.log(err)
});

//creates books, CANNOT create books until we create the authors
