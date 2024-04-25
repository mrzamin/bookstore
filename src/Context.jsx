import { createContext, useState } from "react";
import bookData from "./data/bookData";

export const StoreContext = createContext(null);

export function StoreContextProvider({ children }) {
  const [products, setProducts] = useState(bookData);

  const addToCart = (product, quantity) => {
    const productToAdd = products.find((item) => item === product);
    setProducts((prevProducts) =>
      prevProducts.map((prod) =>
        prod === productToAdd
          ? { ...prod, quantity: quantity, inBag: true }
          : prod
      )
    );
  };

  const removeFromCart = (product, quantity) => {
    const productToRemove = products.find((item) => item === product);
    setProducts((prevProducts) =>
      prevProducts.map((prod) =>
        prod === productToRemove ? { ...prod, quantity: 0, inBag: false } : prod
      )
    );
  };

  return (
    <StoreContext.Provider
      value={{ products, setProducts, removeFromCart, addToCart }}
    >
      {children}
    </StoreContext.Provider>
  );
}
