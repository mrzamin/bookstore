import { NavLink } from "react-router-dom";
import Container from "../NavContainer/Container";
import DropdownContent from "./DropdownContent/DropdownContent";
import { ChevronDown, ChevronUp } from "lucide-react";

const MenuItem = ({
  label,
  href,
  children,
  onToggle,
  active,
  setIsDrawerOpen,
}) => {
  const handleClick = () => {
    const activeElement = document.activeElement;
    activeElement.blur();
  };

  return (
    <li>
      <div className="nav_item_content">
        <NavLink
          to={href}
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => {
            setIsDrawerOpen && setIsDrawerOpen(false);
            handleClick();
          }}
        >
          {label}
        </NavLink>
        {children && (
          <button
            className="md:hidden"
            onClick={onToggle}
            aria-label="Toggle dropdown"
            aria-haspopup="menu"
            aria-expanded={active ? "true" : "false"}
          >
            {active ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        )}
      </div>
      {children && (
        <div
          className={`dropdown ${
            active ? "h-auto" : "h-0 overflow-hidden md:h-auto"
          }`}
          role="menu"
        >
          <Container>
            <DropdownContent
              submenuscontent={children}
              setIsDrawerOpen={setIsDrawerOpen}
              handleClick={handleClick}
            />
          </Container>
        </div>
      )}
    </li>
  );
};

export default MenuItem;
