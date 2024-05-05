import styles from "./BookQuantity.module.css";
const BookQuantity = ({ quantity, setQuantity }) => {
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
