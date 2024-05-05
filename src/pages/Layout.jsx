import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import { StoreContextProvider } from "../Context";

const Layout = () => {
  return (
    <StoreContextProvider>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </StoreContextProvider>
  );
};

export default Layout;
