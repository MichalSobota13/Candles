import React from "react";
import "./Basket.css";
import { Footer } from "../../components";
import { useCartContext } from "./CartContext.hooks";
import { motion } from "framer-motion";
import { pageAnim } from "../../Animation";

export const Basket = () => {
  const { items, decreaseQty, increaseQty, removeProduct, removeProductsAll } =
    useCartContext();

  return (
    <motion.div
      variants={pageAnim}
      initial="hidden"
      animate="show">
      <div className="Basket">
        <div className="BasketView">
          <table>
            <thead>
              <tr className="BasketTableName">
                <th>Nazwa</th>
                <th>Ilość</th>
                <th>Cena jedn.</th>
                <th>Wartość</th>
                <th>Usuń</th>
              </tr>
            </thead>
            {items.length > 0 &&
              items.map((product, index) => (
                <React.Fragment key={`${index}-basket-product`}>
                  <tbody className="BasketTableBody">
                    <tr className="BasketTableValue">
                      <td>
                        <div className="BasketTableValueName">
                          <img
                            src={product.img}
                            alt="Product"
                          />
                          <p>{product.name}</p>
                        </div>
                      </td>

                      <td className="BtnQAB">
                        <div className="BtnQABasket">
                          <div id="PQuantityBasket">
                            <div
                              className="BtnQtyBasket"
                              onClick={() => decreaseQty(product.id)}>
                              <span className="BtnQtyMinusB" />
                            </div>
                            <input
                              type="text"
                              name="qty"
                              id="PQuantityWantedBasket"
                              min="1"
                              value={product.qty}
                              onChange={() => {}}
                            />
                            <div
                              className="BtnQtyBasket"
                              onClick={() => increaseQty(product.id)}>
                              <span className="BtnQtyPlusB" />
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="BasketPrice">
                        <p>
                          {product.discountPrice && (
                            <del>{product.mainPrice}</del>
                          )}
                          {product.discountPrice
                            ? ` ${product.discountPrice}`
                            : product.mainPrice}
                          zł
                        </p>
                      </td>

                      <td className="BasketValue">
                        <p>
                          {product.value % 1 !== 0
                            ? `${product.value.toFixed(2)}zł`
                            : `${String(product.value)},00zł`}
                        </p>
                      </td>

                      <td className="ButtonDeleteItem">
                        <button onClick={() => removeProduct(product.id)}>
                          X
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </React.Fragment>
              ))}

            {items.length === 0 && (
              <>
                <tbody className="BasketTableBody EmptyBasketView">
                  <tr className="EmptyBasket">
                    <td>Koszyk jest pusty</td>
                  </tr>
                </tbody>
              </>
            )}
          </table>

          <div className="RabatAndDeleteView">
            <div className="Rabat">
              <input
                type="text"
                id="text"
                placeholder="Wpisz kod rabatowy"
              />
              <button>Dodaj</button>
            </div>
            <div className="Delete">
              <button onClick={() => removeProductsAll()}>
                Usuń wszystkie proukty
              </button>
            </div>
          </div>

          <div className="SummaryOrder">
            <table className="SummaryOrderTab">
              <tbody>
                <tr className="SummaryProducts">
                  <td id="SPV">Produkty</td>
                  <td>
                    {items
                      .reduce((accumulator, currentValue) => {
                        return accumulator + currentValue.value;
                      }, 0)
                      .toFixed(2)}
                    zł
                  </td>
                </tr>
                <tr className="SummaryDelivery">
                  <td id="SPV">DOSTAWA</td>
                  <td>Darmowa</td>
                </tr>
                <tr className="SummarySum">
                  <td id="SPV">DO ZAPŁATY</td>
                  <td>
                    {items
                      .reduce((accumulator, currentValue) => {
                        return accumulator + currentValue.value;
                      }, 0)
                      .toFixed(2)}
                    zł
                  </td>
                </tr>
              </tbody>
            </table>
            <button>Przejdź do zamówienia</button>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};
