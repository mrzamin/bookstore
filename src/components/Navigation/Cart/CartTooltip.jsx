import styles from "./CartTooltip.module.css";
import { useContext } from "react";
import { StoreContext } from "../../../Context";
import deleteIcon from "../../../../public/icons/deleteIcon.png";

const CartToolTip = ({ inCart }) => {
  console.log(inCart);
  const { products, addToCart, removeFromCart } = useContext(StoreContext);

  const handleDelete = (id) => {
    const product = products.find((prod) => prod.id === id);

    removeFromCart(product);
  };
  return (
    <div className={styles.cartTooltip}>
      <h2>Cart</h2>
      {inCart.length > 0 ? (
        <div className={styles.bookList}>
          {inCart.map((book) => (
            <div className={styles.bookItem} key={book.id}>
              <div className={styles.leftContainer}>
                <div className={styles.imageContainer}>
                  <img
                    className={styles.image}
                    src={book.src}
                    alt="book-cover"
                  />
                </div>
                <div className={styles.productInformation}>
                  <h4 className={styles.title}>{book.title}</h4>
                  <div className={styles.quantity}>Qty: {book.quantity}</div>
                </div>
                <div className={styles.deleteContainer}>
                  <img
                    className={styles.deleteIcon}
                    src={deleteIcon}
                    onClick={(e) => {
                      handleDelete(book.id);
                    }}
                    alt="delete"
                  />
                </div>
              </div>
              <div className={styles.rightContainer}>
                <h5>${(book.price * book.quantity).toFixed(2)}</h5>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.emptyCart}>Your cart is empty.</div>
      )}
    </div>
  );
};

export default CartToolTip;
