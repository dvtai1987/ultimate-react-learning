const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*
// Destructuring example

const book = getBook(3);

// const title = book.title;
// const author = book.author;
// title;
// author;
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(title, author, pages, publicationDate, genres, hasMovieAdaptation);

const [firstGenre, secondGenre, ...restGenres] = genres;

console.log(firstGenre, secondGenre, restGenres);

const newGeneres = ["epic fantasy", ...genres, "classic"];

console.log(newGeneres);

const updatedBook = {
  ...book,
  // adding new property
  moviePublicationDate: "2001-12-19",

  // updating existing property
  // pages: 1210,
};

console.log(updatedBook);

// fucntion getYear(str) {
//     return str.split("-")[0];
// }

const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));

const summary = `${title} is a book written by ${author}. It was published on ${getYear(publicationDate)} and has ${pages} pages. It belongs to the following genres: ${genres.join(", ")}. ${
  hasMovieAdaptation
    ? "It has a movie adaptation."
    : "It does not have a movie adaptation."
}`;
summary;

const pageRange = pages > 1000 ? "over 1000 pages" : "less than 1000 pages";
// pageRange;
console.log(`The book has ${pageRange}. Total pages is: ${pages}`);

// AND operator returns the first falsy value or the last value if all are truthy
console.log(true && "Hello");
console.log(false && "Hello");
console.log(hasMovieAdaptation && "This book has a movie adaptation.");

// Falsy values: false, 0, "", null, undefined, NaN
console.log("hello" && "world");
console.log(null && "world");

// OR operator returns the first truthy value or the last value if all are falsy
// console.log(true || "Hello");
// console.log(false || "Hello");
// console.log(book.translations.spanish || "No Spanish translation available");

// console.log(book.reviews.librarything.reviewsCount);
// const countReviews =
//   book.reviews.librarything.reviewsCount || "No reviews available";
// countReviews;

// nullish coalescing operator (??) returns the right-hand side operand when the left-hand side operand is null or undefined
// otherwise it returns the left-hand side operand.

// const countReviewsNullish =
//   book.reviews.librarything.reviewsCount ?? "No reviews available";
// countReviewsNullish;

function getTotalReviews(book) {
  const goodreadsReviews = book.reviews?.goodreads?.reviewsCount ?? 0;
  goodreadsReviews;
  const librarythingReviews = book.reviews?.librarything?.reviewsCount ?? 0;
  librarythingReviews;
  return goodreadsReviews + librarythingReviews;
}
console.log(getTotalReviews(book));


// optional chaining example
function getTotalReviews(book) {
  const goodreadsReviews = book.reviews?.goodreads?.reviewsCount ?? 0;
  goodreadsReviews;
  const librarythingReviews = book.reviews?.librarything?.reviewsCount ?? 0;
  librarythingReviews;
  return goodreadsReviews + librarythingReviews;
}

// declare books variable and assign it the value of getBooks() function
const books = getBooks();
books;

// array map example
const number = [1, 2, 3, 4, 5].map((n) => n * 3);
console.log(number);

// get all book tittles elements from books array
const bookTittles = books.map((book) => book.title);
bookTittles;

// get some book data with map method and return an array of objects with title and author properties
const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviews(book),
}));

essentialData;

// filter method example
const longBooks = books.filter((book) => book.pages > 500);
console.log(longBooks);

// multiple filter example: get all fantasy books that have movie adaptation
const fantasyBooks = books
  .filter((book) => book.genres.includes("fantasy"))
  .filter((book) => book.hasMovieAdaptation);
console.log(fantasyBooks);

// combine multiple filter condidtions and map method to get the title of all fantasy books that have more than 500 pages
const longFantasyBooks = books
  .filter((book) => book.pages > 500 && book.genres.includes("fantasy"))
  .map((book) => ({ title: book.title, author: book.author }));
console.log(longFantasyBooks);

// reduce method example: get the total number of pages of all books
const totalPages = books.reduce((total, book) => total + book.pages, 0);
console.log(totalPages);

// sort method example
const arr = [1, 5, 7, 9, 2, 12];
const sortedArrAsc = arr.slice().sort((a, b) => a - b);
const sortedArrDsc = arr.slice().sort((a, b) => b - a);
arr;
sortedArrAsc;
sortedArrDsc;

const sortedBooksByPagesAsc = books.slice().sort((a, b) => a.pages - b.pages);
const sortedBooksByPagesDsc = books.slice().sort((a, b) => b.pages - a.pages);
sortedBooksByPagesAsc;
sortedBooksByPagesDsc;

// 1 add a new book to the books array using spread operator
const newBook = {
  id: 6,
  title: "The Hobbit",
  publicationDate: "1937-09-21",
  author: "J. R. R. Tolkien",
  genres: ["fantasy", "adventure"],
  hasMovieAdaptation: true,
  pages: 310,
  translations: {
    spanish: "El hobbit",
    chinese: "霍比特人",
    french: "Le Hobbit",
  },
};

const updatedBooks = [...books, newBook];
updatedBooks;

// 2 delete the pages property from the first book in the books array
const deletedBooks = updatedBooks.filter((book) => book.id !== 3);
deletedBooks;

//3 update the book object in the array
const bookToUpdate = deletedBooks.map((book) =>
  book.id === 1 ? { ...book, page: 1300 } : book,
);
bookToUpdate;

*/

// fetch("https://jsonplaceholder.typicode.com/todos/")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// console.log("jonas");

async function getTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const data = await response.json();
  console.log(data);

  console.log("jonas");
}

getTodos();
