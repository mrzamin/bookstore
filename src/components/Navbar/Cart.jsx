import { UserRoundX } from "lucide-react";
import { Link } from "react-router-dom";
import cartIcon from "../../../public/icons/cart.png";
import { useContext } from "react";
import { StoreContext } from "../../Context";
import CartTooltip from "./MegaMenu/Cart Tooltip/CartTooltip";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import styles from "../Navbar/MegaMenu/Cart Tooltip/CartTooltip.module.css";

const Cart = () => {
  const { products, addToCart, removeFromCart } = useContext(StoreContext);

  const inCart = products.filter((product) => product.inBag === true);

  const inCartTotal = inCart.reduce((total, book) => total + book.quantity, 0);

  return (
    <div className="register">
      <div className="block md:hidden">
        <div className="avatar">
          <UserRoundX />
        </div>
      </div>
      <div className="hidden md:block navCart">
        <Link to="/checkout" data-tooltip-id="tooltip" className="cart">
          <div>Cart</div>
          <img src={cartIcon} width="40px" alt="cart" />
          {inCart.length > 0 && (
            <div className="itemsInCart">
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
