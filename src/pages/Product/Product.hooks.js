import { useState } from "react"
import { useParams } from "react-router-dom"
import productsList from "../../data/productsList"

export const useProductProps = () => {
  const { id } = useParams()
  const product = productsList.find(product => product.id === Number(id))
  const [productCount, setProductCount] = useState(1)

  const decrease = () => {
    if (productCount === '') {
      setProductCount(1)
    } else if (productCount > 1) {
      setProductCount(productCount - 1)
    } 
  }
  
  const increase = () => {
    if (productCount === '') {
      setProductCount(1)
    } else {
      setProductCount(productCount + 1)
    }
  }

  const onChange = (e) => {
    if (Number(e.target.value) >= 1) {
      setProductCount(Number(e.target.value))
    } else if (e.target.value === '') {
      setProductCount("")
    }
  } 

  return {
    product,
    decrease,
    increase,
    onChange,
    productCount
  }
}