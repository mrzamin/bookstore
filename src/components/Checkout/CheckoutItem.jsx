import { useContext, useState } from "react";
import { StoreContext } from "../../Context.jsx";
import styles from "./CheckoutItem.module.css";
import BookQuantity from "../Books/BookQuantity/BookQuantity.jsx";
import { Link } from "react-router-dom";
import deleteIcon from "../../../public/icons/deleteIcon.png";
const CheckoutItem = ({ author, src, slug, title, price, id, quantity }) => {
  const { products, addToCart, removeFromCart } = useContext(StoreContext);

  const [amount, setAmount] = useState(quantity);

  const total = price * amount;
  return (
    <div className={styles.checkoutItem}>
      <div className={styles.leftContainer}>
        <Link to={`/shop/${slug}`}>
          <div className={styles.imageContainer}>
            <img className={styles.image} src={src} alt="book-cover" />
          </div>
        </Link>

        <div className={styles.titleAndQuantity}>
          <h4 className={styles.title}>{title}</h4>
          <BookQuantity
            quantity={amount}
            id={id}
            setQuantity={setAmount}
          ></BookQuantity>
        </div>
      </div>

      <div className={styles.rightContainer}>
        <div>${total}</div>
        <img className={styles.delete} src={deleteIcon} alt="delete" />
      </div>
    </div>
  );
};

export default CheckoutItem;
