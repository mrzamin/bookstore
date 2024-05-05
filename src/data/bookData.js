import { v4 as uuidv4 } from "uuid";
import getImgPath from "../utils/getImagePath";

const Book = (title, author, price, category, description) => {
  return {
    id: uuidv4(),
    title,
    author,
    src: getImgPath(author),
    slug: `${author}-${title}`,
    price,
    quantity: 0,
    inCart: false,
    category: category,
    description: description,
  };
};

let Book1 = Book(
  "The Power Of Intention",
  "Wayne Dyer",
  22.99,
  "mindset",
  "The author has researched intention as a force in the universe which allows the act of creation to take place. This title helps you gain inspirational tips for living life to the fullest by listening to the author live as he explores the secrets of the power of intention."
);
let Book2 = Book(
  "Seven Habits of Highly Effective People",
  "Stephen Covey",
  13.99,
  "goal setting & habits",
  "This beloved classic presents a principle-centered approach for solving both personal and professional problems. With penetrating insights and practical anecdotes, Stephen R. Covey reveals a step-by-step pathway for living with fairness, integrity, honesty, and human dignity - principles that give us the security to adapt to change and the wisdom and power to take advantage of the opportunities that change creates."
);
let Book3 = Book(
  "Good to Great",
  "Jim Collins",
  11.99,
  "entrepreneurship & startups",
  "Over five years, Jim Collins and his research team have analyzed the histories of 28 companies, discovering why some companies make the leap and others don't."
);
let Book4 = Book(
  "The Purpose Driven Life",
  "Rick Warren",
  11.99,
  "motivation, inspiration, & success",
  "The Purpose Driven Life is more than a book; it's a road map for your spiritual journey. Combining thoughtful verses from scripture with timely stories and perspectives from Warren's own life, The Purpose Driven Life will help you discover the answer to one of life's most important questions: What on Earth am I here for?"
);
let Book5 = Book(
  "Mindset",
  "Carol Dweck",
  10.99,
  "mindset",
  "After decades of research, world-renowned Stanford University psychologist Carol S. Dweck, PhD, discovered a simple but groundbreaking idea: the power of mindset. In this brilliant book, she shows how success in school, work, sports, the arts, and almost every area of human endeavor can be dramatically influenced by how we think about our talents and abilities. People with a fixed mindset - those who believe that abilities are fixed - are less likely to flourish than those with a growth mindset - those who believe that abilities can be developed. "
);
let Book6 = Book(
  "The Power of Positive Thinking",
  "Norman Vincent Peale",
  6.99,
  "mindset",
  "Translated into 15 languages with more than 7 million copies sold, The Power of Positive Thinking is unparalleled in its extraordinary capacity for restoring the faltering faith of millions. In this insightful program, Dr. Peale offers the essence of his profound method for mastering the problems of everyday living. "
);
let Book7 = Book(
  "The Richest Man in Babylon",
  "George Clason",
  6.99,
  "financial freedom",
  "The Richest Man in Babylon is a transformative book that has changed the way millions of people think about money since it was first published in 1926. Through light, entertaining parables author George S. Clason shares profound truths about wealth and success that will revolutionize the way you relate to money and interact with your finances. Clason's wisdom has inspired countless readers and listeners to gain, grow, and maintain their wealth, making this one of the most beloved finance books of all time. "
);
let Book8 = Book(
  "The Power of One More",
  "Ed Mylett",
  7.99,
  "motivation, inspiration, & success",
  "In The Power of One More, renowned keynote speaker and performance expert Ed Mylett draws on thirty years of experience as an entrepreneur and coach to top athletes, entertainers, and business executives to reveal powerful strategies to help you live an extraordinary 'one more' life."
);
let Book9 = Book(
  "How To Win Friends and Influence People",
  "Dale Carnegie",
  6.99,
  "daily communication",
  "For over 60 years the rock-solid, time-tested advice in this audiobook has carried thousands of now-famous people up the ladder of success in their business and personal lives."
);
let Book10 = Book(
  "As a Man Thinkith",
  "James Allen",
  5.99,
  "mindset",
  "Originally published in 1903, James Allen’s As a Man Thinketh reveals the fundamental truth of human nature: “A man is literally what he thinks.” Allen’s deceptively simple principle has changed the lives of millions of readers and listeners, making As a Man Thinketh a classic best seller for decades."
);
let Book11 = Book(
  "Think and Grow Rich",
  "Napoleon Hill",
  5.99,
  "motivation, inspiration, & success",
  "The most famous of all teachers of success spent a fortune and the better part of a lifetime of effort to produce the law of success philosophy that forms the basis of his books and that is so powerfully summarized and explained for the general public in this book."
);
let Book12 = Book(
  "Crushing It!",
  "Gary Vaynerchuk",
  9.99,
  "entrepreneurship & startups",
  "Four-time New York Times bestselling author Gary Vaynerchuk offers new lessons and inspiration drawn from the experiences of dozens of influencers and entrepreneurs who rejected the predictable corporate path in favor of pursuing their dreams by building thriving businesses and extraordinary personal brands."
);
let Book13 = Book(
  "The Bezos Letters",
  "Steve Anderson",
  9.99,
  "entrepreneurship & startups",
  "Amazon is the fastest company ever to reach $100 billion in sales, and they didn’t reach that landmark by staying in their comfort zone. Risk-taking is the key that unlocked the door to growth at Amazon, but those risks were (and are) intentional, calculated, and strategic."
);
let Book14 = Book(
  "The Diary of a CEO",
  "Steven Bartlett",
  9.99,
  "entrepreneurship & startups",
  "These fundamental laws underpinned my meteoric rise, and they will fuel yours too, whether you want to build something great or become someone great. The laws are rooted in psychology and behavioral science, in my own experiences, and those of the world's most successful entrepreneurs, entertainers, artists, writers, and athletes, who I’ve interviewed on my podcast."
);

let Book15 = Book(
  "The Lean Startup",
  "Eric Ries",
  9.99,
  "entrepreneurship & startups",
  "Most startups fail. But many of those failures are preventable. The Lean Startup is a new approach being adopted across the globe, changing the way companies are built and new products are launched."
);

let Book16 = Book(
  "Steve Jobs",
  "Walter Isaacson",
  11.99,
  "entrepreneurship & startups",
  "Based on more than 40 interviews with Jobs conducted over two years - as well as interviews with more than a hundred family members, friends, adversaries, competitors, and colleagues - Walter Isaacson has written a riveting story of the roller-coaster life and searingly intense personality of a creative entrepreneur whose passion for perfection and ferocious drive revolutionized six industries: personal computers, animated movies, music, phones, tablet computing, and digital publishing."
);

let Book17 = Book(
  "The Hard Thing About Hard Things",
  "Ben Horowitz",
  15.99,
  "entrepreneurship & startups",
  "While many people talk about how great it is to start a business, very few are honest about how difficult it is to run one. Ben Horowitz analyzes the problems that confront leaders every day, sharing the insights he’s gained developing, managing, selling, buying, investing in, and supervising technology companies. "
);
let Book18 = Book(
  "Zero to One",
  "Peter Thiel",
  20.99,
  "entrepreneurship & startups",
  "The great secret of our time is that there are still uncharted frontiers to explore and new inventions to create. In Zero to One, legendary entrepreneur and investor Peter Thiel shows how we can find singular ways to create those new things."
);
let Book19 = Book(
  "The Execution Factor",
  "Kim Perell",
  9.99,
  "entrepreneurship & startups",
  "Kim Perell made headlines for her amazing transformative story of a start-up entrepreneur to an internationally renowned CEO and prominent angel investor. From her modest beginnings at her kitchen table, she went from broke to multimillionaire in just a few short years. Today, she has investments in more than 70 start-ups, many of which have been sold to some of the largest Fortune 500 companies. Now, in The Execution Factor, she offers indispensable wisdom as she shares her personal journey and proven program for achieving success."
);

let Book20 = Book(
  "The 21 Irrefutable Laws of Leadership",
  "John Maxwell",
  6.99,
  "leadership",
  "Leadership has become increasingly complex in recent years. The times are difficult, and it can be challenging to get people to work together. Businesses, government, families, communities, and teams are all crying out for good leaders to help them. This is where the principles outlined in The 21 Irrefutable Laws of Leadership can help."
);

let Book21 = Book(
  "Extreme Ownership",
  "Jocko Willink and Leif Babin",
  6.99,
  "leadership",
  "Combat, the most intense and dynamic environment imaginable, teaches the toughest leadership lessons, with absolutely everything at stake. Jocko Willink and Leif Babin learned this reality first-hand on the most violent and dangerous battlefield in Iraq. As leaders of SEAL Team Three’s Task Unit Bruiser, their mission was one many thought impossible: help U.S. forces secure Ramadi, a violent, insurgent-held city deemed “all but lost.” In gripping, firsthand accounts of heroism, tragic loss, and hard-won victories, they learned that leadership - at every level - is the most important factor in whether a team succeeds or fails."
);

let Book22 = Book(
  "Dare to Lead",
  "Brené Brown",
  6.99,
  "leadership",
  "Leadership is not about titles, status, and wielding power. A leader is anyone who takes responsibility for recognizing the potential in people and ideas and has the courage to develop that potential."
);

let Book23 = Book(
  "The Effective Executive",
  "Peter F. Drucker",
  6.99,
  "leadership",
  "The measure of the executive, Drucker reminds us, is the ability to 'get the right things done'. This usually involves doing what other people have overlooked as well as avoiding what is unproductive. Intelligence, imagination, and knowledge may all be wasted in an executive job without the acquired habits of mind that mold them into results."
);

let Book24 = Book(
  "Awaken the Giant Within",
  "Tony Robbins",
  6.99,
  "motivation, inspiration, & success",
  "The acknowledged expert in the psychology of change, Tony Robbins provides a step-by-step program teaching the fundamental lessons of self-mastery that will enable you to discover your true purpose, take control of your life, and harness the forces that shape your destiny."
);

let Book25 = Book(
  "How to Talk to Anyone",
  "Leil Lowndes",
  12.99,
  "daily communication",
  "What is that magic quality makes some people instantly loved and respected? Everyone wants to be their friend (or, if single, their lover!) In business, they rise swiftly to the top of the corporate ladder. What is their 'Midas touch?'"
);

let Book26 = Book(
  "The Definitive Book of Body Language",
  "Allan Pease",
  12.99,
  "daily communication",
  "It is a scientific fact that people’s gestures give away their true intentions. Yet most of us don’t know how to read body language– and don’t realize how our own physical movements speak to others. Now the world’s foremost experts on the subject share their techniques for reading body language signals to achieve success in every area of life."
);

let Book27 = Book(
  "Talk Like TED",
  "Carmine Gallo",
  12.99,
  "public speaking",
  "Ideas are the currency of the twenty-first century. In order to succeed, you need to be able to sell your ideas persuasively. This ability is the single greatest skill that will help you accomplish your dreams. Many people have a fear of public speaking or are insecure about their ability to give a successful presentation. Now public speaking coach and bestselling author Carmine Gallo explores what makes a great presentation by examining the widely acclaimed TED Talks, which have redefined the elements of a successful presentation and become the gold standard for public speaking. "
);

let Book28 = Book(
  "Ted Talks: The Official TED Guide to Public Speaking",
  "Chris Anderson",
  14.99,
  "public speaking",
  "Since taking over TED in 2001, Chris Anderson has worked with all the TED speakers who have inspired us the most, and here he shares insights from such favorites as Sir Ken Robinson, Salman Khan, Monica Lewinsky, and more— everything from how to craft your talk’s content to how you can be most effective on stage."
);

let Book29 = Book(
  "The Intelligent Investor",
  "Benjamin Graham",
  9.99,
  "investing",
  "Warren Buffett says this is the single greatest book on investing ever written. It’s based on Benjamin Graham’s classes, which Warren Buffett took as a young student. Value investors find companies with great fundamentals and buy their shares at a discounted price. After that, all they have to do is wait. Eventually, their real value will unlock. A true, timeless classic."
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
