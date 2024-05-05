import { useContext, useState } from "react";
import { StoreContext } from "../../Context.jsx";
import { useParams } from "react-router-dom";
import BookQuantity from "../../components/Books/BookQuantity/BookQuantity.jsx";
import styles from "./BookDetailPage.module.css";

const BookDetailPage = () => {
  const { products, addToCart, removeFromCart } = useContext(StoreContext);

  const { slug } = useParams();
  const book = products.find((prod) => prod.slug === slug);

  let initialQuantity = book.inCart === true ? book.quantity : 1;
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleAddToCartClick = () => {
    addToCart(book, quantity);
  };

  const handleRemoveClick = () => {
    removeFromCart(book);
    setQuantity(1);
  };

  return (
    <div className={styles.bookDetail}>
      <div className={styles.leftContainer}>
        <div className={styles.imageContainer}>
          <img src={book.src} alt="book-cover" className={styles.img} />
        </div>
      </div>

      <div className={styles.rightContainer}>
        <h1>{book.title}</h1>
        <h3>By {book.author}</h3>
        <div className={styles.description}>{book.description}</div>
        <BookQuantity
          id={book.id}
          setQuantity={setQuantity}
          quantity={quantity}
        ></BookQuantity>
        <div className={styles.price}>${book.price}</div>
        {book.inCart ? (
          <button
            type="button"
            className={styles.removeButton}
            onClick={() => handleRemoveClick(book)}
          >
            Remove from Bag
          </button>
        ) : (
          <button
            type="button"
            className={styles.addButton}
            onClick={() => handleAddToCartClick(book)}
          >
            Add to Bag
          </button>
        )}
      </div>
    </div>
  );
};

export default BookDetailPage;
