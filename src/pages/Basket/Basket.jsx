import React from "react";
import "./Basket.css"
import { Footer } from "../../components"
import { useCartContext } from "./CartContext.hooks";

export const Basket = () => {
  const {
    items,
    decreaseQty,
    increaseQty,
    removeProduct
  } = useCartContext()

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
            {items.map((product, index) => (
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
                          <div className="BtnQtyBasket" onClick={() => decreaseQty(product.id)}>
                            <span className="BtnQtyMinusB" />
                          </div>
                          <input type="text" name="qty" id="PQuantityWantedBasket" min="1" value={product.qty} onChange={() => {}} />
                          <div className="BtnQtyBasket" onClick={() => increaseQty(product.id)}>
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
                      <button onClick={() => removeProduct(product.id)}>X</button>
                    </td>
                  </tr>
                </tbody>
              </React.Fragment>
            ))}
            {/* zrobić miesjce z kodem rabatowym i podsumowaniem zamówienia 
            <div>
              <div></div>
              <div></div>
            </div>
            */}
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}