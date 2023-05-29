import React from "react";
import "./Basket.css"
import { useProductProps } from "../Product/Product.hooks";
import { CartContext } from "./CartContext";
import { Footer } from "../../components"
import { useContext } from "react";

export const Basket = () => {
  const {items: products, decrease} = useContext(CartContext);

  const {
    // product,
    // decrease,
    increase,
    onChange,
    // productCount
  } = useProductProps()

  return (
    <>
      <div className="Basket">
        <div className="BasketView">
          <table>
            <thead>
              <tr className="BasketTableName">
                <th>Nazwa</th>
                <th>Ilość</th>
                <th>Cena</th>
                <th>Usuń</th>
              </tr>
            </thead>
            {products.map((product, index) => (
              <React.Fragment key={`${index}-basket-product`}>
                <tbody className="BasketTableBody">
                  <tr className="BasketTableValue">
                    <td>
                      <div className="BasketTableValueName">
                        <img src={product.img} alt="Product" />
                        <p>{product.name}</p>
                      </div>
                    </td>

                    <td className="BtnQAB">
                      <div className="BtnQABasket">
                        <div id="PQuantityBasket">
                          <div className="BtnQtyBasket" onClick={() => decrease(product.id)}>
                            <span className="BtnQtyMinusB" />
                          </div>
                          <input type="text" name="qty" id="PQuantityWantedBasket" min="1" value={product.qty} onChange={(e) => onChange(e)} />
                          <div className="BtnQtyBasket" onClick={increase}>
                            <span className="BtnQtyPlusB" />
                          </div>
                        </div>
                        {/* <button onClick={() => addToCart(product, productCount)} className="BtnAddBasket"></button> */}
                      </div>
                    </td>

                    <td className="BasketPrice">
                      <p>
                      {product.discountPrice && <del>{product.mainPrice}</del>}
                      {product.discountPrice ? ` ${product.discountPrice}` : product.mainPrice}zł
                      </p>
                    </td>

                    <td className="ButtonDeleteItem">
                      <button>X</button>
                    </td>
                  </tr>
                </tbody>
              </React.Fragment>
            ))}
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}