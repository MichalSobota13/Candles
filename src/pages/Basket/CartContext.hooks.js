import { useContext } from "react"
import { CartContext } from "./CartContext"

export const useCartContext = () => {
  const {
    items,
    setItems,
    productCount,
    setProductCount
  } = useContext(CartContext)

  const addToCart = (product, qty) => {
    let index = items.findIndex(item => item.id === product.id)
    if (index >= 0) {
      setItems(items.map(item => {
        if (item.id === product.id) {
          return {
            ...item,
            qty: item.qty + qty  
          }
        } else return item
      }))
    } else {
      setItems((prevState) => [...prevState, { ...product, qty }]);
    }
    setProductCount(productCount + qty)
  };

  const increaseQty = (id) => {
    setItems(items.map(item => {
      if (item.id === id) {
        setProductCount(productCount + 1)
        return {
          ...item,
          qty: item.qty + 1
        }
      } else return item
    }))
  }

  const decreaseQty = (id) => {
    setItems(items.map(item => {
      if (item.id === id && item.qty > 1) {
        setProductCount(productCount - 1)
        return {
          ...item,
          qty: item.qty - 1
        }
      } else return item
    }))
  }

  const removeProduct = (id) => {
    setItems(items.filter(item =>
      item.id !== id))

    const itemsCount = productCount - items[items.findIndex(item => item.id === id)].qty  
    setProductCount(itemsCount)
  }

  const removeProductsAll = () => {
    setItems([])
    setProductCount(0)
  } 
  return {
    items,
    addToCart,
    decreaseQty,
    increaseQty,
    productCount,
    removeProduct,
    removeProductsAll
  }
}