import { v4 as uuidv4 } from "uuid";
import getImgPath from "../utils/getImagePath";

const Book = (title, author, price, category) => {
  return {
    id: uuidv4(),
    title,
    author,
    src: getImgPath(author),
    slug: `${author}-${title}`,
    price,
    quantity: 0,
    inBag: false,
    inFavorites: false,
    description:
      "The book description is the pitch to the reader about why they should buy your book. When done right, it directly drives book sales. There are so many examples of how book descriptions lead to huge changes in sales. One of my favorite stories is for JT McCormick’s book, I Got There. Despite having a nice cover and receiving good reviews, it wasn’t ...",
    category: category,
  };
};

let Book1 = Book(
  "The Power Of Intention",
  "Wayne Dyer",
  22.99,
  "personal growth"
);
let Book2 = Book(
  "Seven Habits of Highly Effective People",
  "Stephen Covey",
  13.99,
  "personal growth"
);
let Book3 = Book("Good to Great", "Jim Collins", 11.99, "entrepreneurship");
let Book4 = Book(
  "The Purpose Driven Life",
  "Rick Warren",
  11.99,
  "personal growth"
);
let Book5 = Book("Mindset", "Carol Dweck", 10.99, "personal growth");
let Book6 = Book(
  "The Power of Positive Thinking",
  "Norman Vincent Peale",
  6.99,
  "personal growth"
);
let Book7 = Book(
  "The Richest Man in Babylon",
  "George Clason",
  6.99,
  "personal growth"
);
let Book8 = Book("The Power of One More", "Ed Mylett", 7.99, "personal growth");
let Book9 = Book(
  "How To Win Friends and Influence People",
  "Dale Carnegie",
  6.99,
  "personal growth"
);
let Book10 = Book("As a Man Thinkith", "James Allen", 5.99, "personal growth");
let Book11 = Book("Think and Grow Rich", "Napoleon Hill", 5.99, "");
let Book12 = Book("Crushing It!", "Gary Vaynerchuk", 9.99, "entrepreneurship");
let Book13 = Book(
  "The Bezos Letters",
  "Steve Anderson",
  9.99,
  "entrepreneurship"
);
let Book14 = Book("$100M Offers", "Alex Hormozi", 9.99, "entrepreneurship");
let Book15 = Book(
  "The Diary of a CEO",
  "Steven Bartlett",
  9.99,
  "entrepreneurship"
);

let Book16 = Book("The Lean Startup", "Eric Ries", 9.99, "entrepreneurship");

let Book17 = Book("Steve Jobs", "Walter Isaacson", 11.99, "entrepreneurship");

let Book18 = Book(
  "The Hard Thing About Hard Things",
  "Ben Horowitz",
  15.99,
  "entrepreneurship"
);
let Book19 = Book("Zero to One", "Peter Thiel", 20.99, "entrepreneurship");
let Book20 = Book(
  "The Execution Factor",
  "Kim Perell",
  9.99,
  "entrepreneurship"
);

let Book21 = Book(
  "The 21 Irrefutable Laws of Leadership",
  "John Maxwell",
  6.99,
  "entrepreneurship"
);

let Book22 = Book(
  "Extreme Ownership",
  "Jocko Willink and Leif Babin",
  6.99,
  "entrepreneurship"
);

let Book23 = Book("Dare to Lead", "Brené Brown", 6.99, "entrepreneurship");

let Book24 = Book(
  "The Effective Executive",
  "Peter F. Drucker",
  6.99,
  "entrepreneurship"
);

let Book25 = Book(
  "Awaken the Giant Within",
  "Tony Robbins",
  6.99,
  "personal growth"
);

let Book26 = Book(
  "How to Talk to Anyone",
  "Leil Lowndes",
  12.99,
  "entrepreneurship"
);

let Book27 = Book(
  "The Definitive Book of Body Language",
  "Allan Pease",
  12.99,
  "entrepreneurship"
);

let Book28 = Book("Talk Like TED", "Carmine Gallo", 12.99, "entrepreneurship");

let Book29 = Book(
  "Ted Talks: The Official TED Guide to Public Speaking",
  "Chris Anderson",
  14.99,
  "entrepreneurship"
);

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
  Book12,
  Book13,
  Book14,
  Book15,
  Book16,
  Book17,
  Book18,
  Book19,
  Book20,
  Book21,
  Book22,
  Book23,
  Book24,
  Book25,
  Book26,
  Book27,
  Book28,
  Book29,
];

export default bookData;
