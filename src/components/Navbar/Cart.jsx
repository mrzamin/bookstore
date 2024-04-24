import { UserRoundX } from "lucide-react";
import { Link } from "react-router-dom";
import cartIcon from "../../../public/icons/cart.png";

const UserProfile = () => {
  return (
    <div className="register">
      <div className="block md:hidden">
        <button className="avatar">
          <UserRoundX />
        </button>
      </div>
      <div className="hidden md:block">
        <Link to={`#`} className="cart">
          <div>Cart</div>
          <img src={cartIcon} width="40px" alt="cart" />
        </Link>
      </div>
    </div>
  );
};

export default UserProfile;
