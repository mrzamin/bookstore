import { useContext, useState, useEffect } from "react";
import { StoreContext } from "../../Context.jsx";
import styles from "./CheckoutItem.module.css";
import BookQuantity from "../Books/BookQuantity/BookQuantity.jsx";
import { Link } from "react-router-dom";
import deleteIcon from "../../../public/icons/deleteIcon.png";
const CheckoutItem = ({ author, src, slug, title, price, id, quantity }) => {
  const { products, addToCart, removeFromCart } = useContext(StoreContext);
  console.log(products);

  const product = products.find((prod) => prod.id === id);

  const [amount, setAmount] = useState(quantity);

  const total = (price * amount).toFixed(2);

  useEffect(() => {
    addToCart(product, amount);
  }, [amount]);

  const handleDelete = () => {
    alert("Are you sure you want to remove this item?");
    removeFromCart(product);
  };
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
        <div className={styles.total}>${total}</div>
        <img
          className={styles.delete}
          src={deleteIcon}
          onClick={handleDelete}
          alt="delete"
        />
      </div>
    </div>
  );
};

export default CheckoutItem;
