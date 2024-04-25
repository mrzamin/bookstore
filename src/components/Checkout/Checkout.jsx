import { useContext, useState } from "react";
import { StoreContext } from "../../Context.jsx";
import styles from "./Checkout.module.css";
import CheckoutItem from "./CheckoutItem.jsx";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { products, addToCart, removeFromCart } = useContext(StoreContext);

  const inCart = products.filter((product) => product.inBag === true);

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
            <div>Subtotal</div>
          </div>
          <div className={styles.taxes}>
            <div>Taxes</div>
            <div>Taxes</div>
          </div>
          <div className={styles.shipping}>
            <div>Shipping</div>
            <div>Shipping</div>
          </div>
          <div className={styles.total}>
            <div>Total</div>
            <div>Total</div>
          </div>

          <button>Process Order</button>
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
