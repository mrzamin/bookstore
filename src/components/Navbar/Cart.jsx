import { UserRoundX } from "lucide-react";
import { Link } from "react-router-dom";
import cartIcon from "../../../public/icons/cart.png";
import { useContext } from "react";
import { StoreContext } from "../../Context";

const Cart = () => {
  const { products, addToCart, removeFromCart } = useContext(StoreContext);

  const inCart = products.filter((product) => product.inBag === true);

  const inCartTotal = inCart.reduce((total, book) => total + book.quantity, 0);

  return (
    <div className="register">
      <div className="block md:hidden">
        <button className="avatar">
          <UserRoundX />
        </button>
      </div>
      <div className="hidden md:block navCart">
        <Link to="/checkout" className="cart">
          <div>Cart</div>
          <img src={cartIcon} width="40px" alt="cart" />
          {inCart.length > 0 && (
            <div className="itemsInCart">
              <span>{inCartTotal}</span>
            </div>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Cart;
