import { useContext, useState } from "react";
import { StoreContext } from "../../../Context.jsx";
import { useParams } from "react-router-dom";
import BookQuantity from "../BookQuantity/BookQuantity.jsx";
import styles from "./BookDetail.module.css";

const BookDetail = () => {
  const { products, addToCart, removeFromCart } = useContext(StoreContext);

  let inBag;
  const { slug } = useParams();
  const product = products.find((prod) => prod.slug === slug);

  const [quantity, setQuantity] = useState(product.quantity);

  if (product.inBag) {
    inBag = "true";
  }
  const handleAddToCartClick = () => {
    addToCart(product, quantity);
  };

  const handleRemoveClick = () => {
    removeFromCart(product, quantity);
    setQuantity(1);
  };

  return (
    <div className={styles.bookDetail}>
      <div className={styles.leftContainer}>
        <div className={styles.imageContainer}>
          <img src={product.src} alt="book-cover" className={styles.img} />
        </div>
      </div>

      <div className={styles.rightContainer}>
        <h1>{product.title}</h1>
        <h3>By {product.author}</h3>
        <div className={styles.description}>{product.description}</div>
        <BookQuantity
          id={product.id}
          setQuantity={setQuantity}
          quantity={quantity}
        ></BookQuantity>
        <div className={styles.price}>${product.price}</div>
        {product.inBag ? (
          <button
            type="button"
            className={styles.removeButton}
            onClick={() => handleRemoveClick(product)}
          >
            Remove from Bag
          </button>
        ) : (
          <button
            type="button"
            className={styles.addButton}
            onClick={() => handleAddToCartClick(product)}
          >
            Add to Bag
          </button>
        )}
      </div>
    </div>
  );
};

export default BookDetail;
