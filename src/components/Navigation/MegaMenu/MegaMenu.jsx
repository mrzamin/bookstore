import { menuData } from "../../../data/menuData";
import MenuItem from "./MenuItem";

const MegaMenu = ({ handleToggle, clicked, setIsDrawerOpen }) => {
  return (
    <div className="nav__container">
      <nav>
        <ul>
          {menuData.map(({ label, href, children }, index) => {
            return (
              <MenuItem
                key={index}
                {...{ label, href, children }}
                onToggle={() => handleToggle && handleToggle(index)}
                active={clicked === index}
                setIsDrawerOpen={setIsDrawerOpen}
              />
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default MegaMenu;
