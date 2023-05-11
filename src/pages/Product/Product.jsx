import "./Product.css"
import Product from "../../assets/Product.jpg"
// import { Link } from "react-router-dom"


export const Product = () => {
  return (
    <div className="Product">
      <div className="ProductView">
        <img src={Product} alt="Product" />
        <div className="ProductViewDescription">
          <span>
            Soy Candle
            <p><del>99,00</del> 89,00zł</p>
          </span>
          <label id="ProductSelect">
            <select id="ProductSelectCount">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
}