import { useContext, useState } from "react";
import { StoreContext } from "../../../Context";
import plusIcon from "../../../../public/icons/plusIcon.png";
import minusIcon from "../../../../public/icons/minusIcon.png";
import styles from "./BookQuantity.module.css";
const BookQuantity = ({ id, quantity, setQuantity }) => {
  // const { setProducts, products, addToCart, removeFromCart } =
  //   useContext(StoreContext);

  // const selected = products.find((product) => product.id === id);

  const handlePlusClick = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };

  const handleMinusClick = () => {
    const newQuantity = Math.max(quantity - 1, 1);
    setQuantity(newQuantity);
  };

  return (
    <div className={styles.bookQuantity}>
      <button className={styles.minusButton} onClick={handleMinusClick}>
        -
      </button>
      <div>{quantity}</div>
      <button className={styles.plusButton} onClick={handlePlusClick}>
        +
      </button>
    </div>
  );
};

export default BookQuantity;
