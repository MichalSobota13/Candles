import "./Product.css"
import { useProductProps } from "./Product.hooks";

export const Product = () => {
  const {
    product,
    decrease,
    increase,
    onChange,
    productCount
  } = useProductProps()

  return (
    <div className="Product">
      <div className="ProductView">
        <img src={product.img} alt="Product" />
        <div className="ProductViewDescription">
          <span>
            {product.name}
            <p>
              {product.discountPrice && <del>{product.mainPrice}</del>}
              {product.discountPrice ? ` ${product.discountPrice}` : product.mainPrice}zł
            </p>
          </span>
          <div className="BtnQA">
            <div id="PQuantity">
              <div className="BtnQty" onClick={decrease}>
                <span className="BtnQtyMinus" />
              </div>
              <input type="text" name="qty" id="PQuantityWanted" min="1" value={productCount} onChange={(e) => onChange(e)} />
              <div className="BtnQty" onClick={increase}>
                <span className="BtnQtyPlus" />
              </div>
            </div>
            <button className="BtnAdd">Dodaj do koszyka</button>
          </div>
          <div className="ProductDescriptionBottom">
            {product.description}
          </div>
        </div>
      </div>
    </div>
  );
}