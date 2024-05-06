import { Link } from "react-router-dom";
import cartIcon from "../../../../../public/icons/cartIcon.png";
import { useContext } from "react";
import { StoreContext } from "../../../../Context";
import CartTooltip from "../CartTooltip/CartTooltip";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import styles from "./CartBadge.module.css";

const Cart = () => {
  const { inCart } = useContext(StoreContext);

  const inCartTotal = inCart.reduce((total, book) => total + book.quantity, 0);

  return (
    <div className="register">
      <div className="block md:hidden">
        <div className="avatar">
          <Link
            to="/checkout"
            data-tooltip-id="tooltip"
            className={styles.cart}
          >
            <img src={cartIcon} width="40px" alt="cart" />
            {inCart.length > 0 && (
              <div className={styles.itemsInCart}>
                <span>{inCartTotal}</span>
              </div>
            )}
          </Link>{" "}
        </div>
      </div>
      <div className="hidden md:block navCart">
        <Link to="/checkout" data-tooltip-id="tooltip" className={styles.cart}>
          <div>Cart</div>
          <img src={cartIcon} width="40px" alt="cart" />
          {inCart.length > 0 && (
            <div className={styles.itemsInCart}>
              <span>{inCartTotal}</span>
            </div>
          )}
        </Link>
        <Tooltip
          style={{ backgroundColor: "white" }}
          id="tooltip"
          className={styles.tooltip}
          clickable={true}
          place="bottom-end"
          opacity={1}
        >
          <CartTooltip inCart={inCart} />
        </Tooltip>
      </div>
    </div>
  );
};

export default Cart;
