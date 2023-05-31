import React from "react";
import "./Basket.css"
import { Footer } from "../../components"
import { useCartContext } from "./CartContext.hooks";

export const Basket = () => {
  const {
    items,
    decreaseQty,
    increaseQty,
    removeProduct,
    removeProductsAll
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
            {items.length > 0 && items.map((product, index) => (
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

            {items.length === 0 && <>
            <tbody className="BasketTableBody EmptyBasketView">
                <tr className="EmptyBasket">
                  <td>
                    Koszyk jest pusty                   
                  </td>
                </tr>
            </tbody>
            </>
            }
          </table>

          <div className="RabatAndDeleteView">
            <div className="Rabat">
              <input type="text" id="text" placeholder="Wpisz kod rabatowy" />
              <button>Dodaj</button>
            </div>
            <div className="Delete">
              <button onClick={() => removeProductsAll()}>Usuń wszystkie proukty</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}