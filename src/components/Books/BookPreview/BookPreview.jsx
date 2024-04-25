import { useContext } from "react";
import { StoreContext } from "../../../Context.jsx";
import { Link } from "react-router-dom";

import styles from "./BookPreview.module.css";

const BookPreview = () => {
  const { products } = useContext(StoreContext);

  return (
    <div>
      <div className={styles.bookGrid}>
        {products.map((product) => (
          <Link to={product.slug} className={styles.bookCard} key={product.id}>
            <img src={product.src} alt="book-cover" />
            <div>{product.title}</div>
            <div>{product.author}</div>
            <div>{product.price}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BookPreview;
