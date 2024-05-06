import { useContext } from "react";
import { StoreContext } from "../../Context.jsx";
import styles from "./CheckoutPage.module.css";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem.jsx";
import { Link } from "react-router-dom";
import arrowIcon from "../../../public/icons/arrowIcon.png";

const CheckoutPage = () => {
  const { inCart } = useContext(StoreContext);
  const subtotal = inCart
    .reduce((total, book) => total + book.price * book.quantity, 0)
    .toFixed(2);
  const taxes = (parseFloat(subtotal) * 0.07).toFixed(2);
  const handleProcessOrder = () => {
    alert(
      "Congratulations! Your order would have been placed now if this were a real store."
    );
  };
  return (
    <div>
      <h3 className={styles.pageTitle}>Shopping Cart</h3>
      <div className={styles.checkout}>
        <div className={styles.leftContainer}>
          {inCart.length > 0 ? (
            inCart.map((item) => (
              <CheckoutItem key={item.id} {...item}></CheckoutItem>
            ))
          ) : (
            <div>Your cart is empty.</div>
          )}
        </div>
        <div className={styles.rightContainer}>
          <h3 className={styles.orderSummary}>Order Summary</h3>
          <div className={styles.subtotal}>
            <div>Subtotal</div>
            <div>${subtotal}</div>
          </div>
          <div className={styles.taxes}>
            <div>Taxes</div>
            <div>${taxes}</div>
          </div>
          <div className={styles.shipping}>
            <div>Shipping</div>
            <div>Free</div>
          </div>
          <div className={styles.total}>
            <div>Total</div>
            <div>${parseFloat(subtotal + taxes).toFixed(2)}</div>
          </div>
          <button
            className={styles.checkoutButton}
            onClick={handleProcessOrder}
          >
            Process Order
          </button>
          <Link to="/shop" className={styles.continueShopping}>
            Continue Shopping{" "}
            <img src={arrowIcon} alt="arrow" className={styles.arrowIcon} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
