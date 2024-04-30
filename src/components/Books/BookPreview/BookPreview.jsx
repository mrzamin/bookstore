import { useContext } from "react";
import { StoreContext } from "../../../Context.jsx";
import { Link } from "react-router-dom";

import styles from "./BookPreview.module.css";

const BookPreview = ({ products }) => {
  return (
    <div className={styles.bookPreview}>
      <div className={styles.bookGrid}>
        {products.map((product) => (
          <Link to={product.slug} className={styles.bookCard} key={product.id}>
            <img
              src={product.src}
              className={styles.bookCover}
              alt="book-cover"
            />
            <div className={styles.productTitle}>{product.title}</div>
            <div className={styles.productAuthor}>{product.author}</div>
            <div>${product.price}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BookPreview;
