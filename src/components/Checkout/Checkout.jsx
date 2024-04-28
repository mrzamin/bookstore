import { useContext, useState } from "react";
import { StoreContext } from "../../Context.jsx";
import styles from "./Checkout.module.css";
import CheckoutItem from "./CheckoutItem.jsx";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { products, addToCart, removeFromCart } = useContext(StoreContext);

  const inCart = products.filter((product) => product.inBag === true);

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
      <h1>Shopping Cart</h1>

      <div className={styles.checkout}>
        <div className={styles.leftContainer}>
          {inCart.length > 0 ? (
            inCart.map((item) => (
              // <div key={item.id}>{item.author}</div>
              <CheckoutItem key={item.id} {...item}></CheckoutItem>
            ))
          ) : (
            <div>Your bag is empty.</div>
          )}
        </div>
        <div className={styles.rightContainer}>
          <h3>Order Summary</h3>
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

          <button onClick={handleProcessOrder}>Process Order</button>
          <Link to="/shop">Continue Shopping</Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

{
  /* // <div key={item.id} className={styles.checkoutItem}>
          //   <img src={item.src} alt="book-cover" />
          //   <div>{item.title}</div>
          //   <div>{item.price}</div>
          //   <div>{item.quantity}</div>
          //   <div>{item.total}</div>
          // </div> */
}
