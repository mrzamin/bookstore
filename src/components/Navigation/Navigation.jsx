import { Link } from "react-router-dom";
import Container from "./NavContainer/Container";
import MobileNavigation from "./MobileNavigation";
import { useState } from "react";
import logo from "../../../public/icons/appLogo.png";
import CartBadge from "./NavCart/CartBadge/CartBadge";
import { AlignJustify } from "lucide-react";
import MegaMenu from "./NavMenu/MegaMenu";

const Navigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <header className="nav__header">
      <Container>
        <div className="toolbar">
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="menu_icon md:hidden"
            aria-haspopup="true"
          >
            {/* Mobile Hamburger menu */}
            <AlignJustify />
          </button>
          <Link className="logo__link" to={"/"}>
            <img src={logo} />
          </Link>
          <div className="hidden md:block">
            {" "}
            <MegaMenu />
          </div>
          <CartBadge />
          <div className="md:hidden absolute">
            <MobileNavigation {...{ isDrawerOpen, setIsDrawerOpen }} />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navigation;
