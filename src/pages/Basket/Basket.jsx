import "./Basket.css"
import { useProductProps } from "../Product/Product.hooks";

export const Basket = () => {
  const {
    product,
    decrease,
    increase,
    onChange,
    productCount
  } = useProductProps()

  return (
    <div className="Basket">
      <div className="BascetView">
        <h1>Koszyk</h1>
        <table>
          <thead>
            <tr>
              <th>Produkt</th>
              <th>Cena</th>
              <th>Ilość</th>
              <th>Suma</th>
              <th>Usuń</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src={Product.img} alt="Product" />
              </td>
              <td>
                <span>
                  {Product.name}
                </span>
              </td>
              <td>
                <p>
                {product.discountPrice && <del>{product.mainPrice}</del>}
                {product.discountPrice ? ` ${product.discountPrice}` : product.mainPrice}zł
                </p>
              </td>
              <td>
                
              </td>
              <td></td>
            </tr>
            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}