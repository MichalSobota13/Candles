import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartProvider({children}) {
  const [productCount, setProductCount] = useState(0);
  const [items, setItems] = useState([]);

  const addToCart = (product, qty) => {
    let index = items.findIndex(item => item.id === product.id)
    if (index >= 0) {
      let parsedItems = items
      parsedItems[index] = { ...items[index], qty: items[index].qty + qty}
      setItems(parsedItems)
    } else {
      setItems((prevState) => [...prevState, { ...product, qty }]);
    }
    setProductCount(productCount + qty)
  };

  useEffect(() => {
    console.log(items)
  }, [items])

  return (
    <CartContext.Provider value={{items, productCount, addToCart}}>
      {children}
      </CartContext.Provider>
  );
}
