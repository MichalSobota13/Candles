import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const storageItems = window.localStorage.getItem("items");
  const storageProductCount = window.localStorage.getItem("productCount");

  const [items, setItems] = useState(
    storageItems ? JSON.parse(storageItems) : []
  );
  const [productCount, setProductCount] = useState(
    storageProductCount ? JSON.parse(storageProductCount) : 0
  );

  useEffect(() => {
    window.localStorage.setItem("items", JSON.stringify(items));
  }, [items, setItems]);

  useEffect(() => {
    window.localStorage.setItem("productCount", JSON.stringify(productCount));
  }, [productCount, setProductCount]);

  return (
    <CartContext.Provider
      value={{
        productCount,
        setProductCount,
        items,
        setItems,
      }}>
      {children}
    </CartContext.Provider>
  );
}
