import { v4 as uuidv4 } from "uuid";
import getImgPath from "../utils/getImagePath";

/* New book template:

{
    id: uuidv4(),
    title: "",
    author: "",
    src: getImgPath("");
    },
    slug: function () {
      return `${this.title} - ${this.author}`;
    },
    price: "",
    quantity: 1,
    isFavorite: false,
    inBag: false,
  },

  
  
*/

const Book = (title, author, price) => {
  return {
    id: uuidv4(),
    title,
    author,
    src: getImgPath(author),
    slug: `${author}-${title}`,
    price,
    quantity: 1,
    inBag: false,
    inFavorites: false,
    description:
      "The book description is the pitch to the reader about why they should buy your book. When done right, it directly drives book sales. There are so many examples of how book descriptions lead to huge changes in sales. One of my favorite stories is for JT McCormick’s book, I Got There. Despite having a nice cover and receiving good reviews, it wasn’t ...",
  };
};

let Book1 = Book("The Power Of Intention", "Wayne Dyer", 22.99);
let Book2 = Book(
  "Seven Habits of Highly Effective People",
  "Stephen Covey",
  13.99
);
let Book3 = Book("Good to Great", "Jim Collins", 11.99);
let Book4 = Book("The Purpose Driven Life", "Rick Warren", 11.99);
let Book5 = Book("Mindset", "Carol Dweck", 10.99);
let Book6 = Book(
  "The Power of Positive Thinking",
  "Norman Vincent Peale",
  6.99
);
let Book7 = Book("The Richest Man in Babylon", "George Clason", 6.99);
let Book8 = Book("The Power of One More", "Ed Mylett", 7.99);
let Book9 = Book(
  "How To Win Friends and Influence People",
  "Dale Carnegie",
  6.99
);
let Book10 = Book("As a Man Thinkith", "James Allen", 5.99);
let Book11 = Book("Think and Grow Rich", "Napoleon Hill", 5.99);

const bookData = [
  Book1,
  Book2,
  Book3,
  Book4,
  Book5,
  Book6,
  Book7,
  Book8,
  Book9,
  Book10,
  Book11,
];

export default bookData;
