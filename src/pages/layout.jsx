import { Outlet } from "react-router-dom";
import Navigation from "../components/Navbar/Navigation";

const Layout = () => {
  return (
    <div>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
