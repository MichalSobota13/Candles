import "./Products.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import productsList from "../../data/productsList";
import { useCartContext } from "..";
import { Footer } from "../../components";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const Products = () => {
  const { addToCart } = useCartContext();

  const [sort, setSort] = useState("");

  const [filtr, setFiltr] = useState("");

  return (
    <>
      <div className="Products">
        <div className="LeftBanner">
          <div className="FiltrProducts">
            <h3>
              <Link to="/">Strona Główna </Link>
              <Link to="/produkty">&gt; Produkty</Link>
            </h3>

            <h2>Filtr</h2>
            <label>
              <input type="checkbox" />
              Parameter1
            </label>
            <label>
              <input type="checkbox" />
              Parameter2
            </label>
            <label>
              <input type="checkbox" />
              Parameter3
            </label>

            <h2>Filtr</h2>
            <label>
              <input type="checkbox" />
              Parameter4
            </label>
            <label>
              <input type="checkbox" />
              Parameter5
            </label>

            <h2>Filtr</h2>
            <label>
              <input type="checkbox" />
              Parameter6
            </label>
            <label>
              <input type="checkbox" />
              Parameter7
            </label>
            <label>
              <input type="checkbox" />
              Parameter8
            </label>

            <button className="FiltrProductsButton">ZASTOSUJ FILTRY</button>
          </div>

          <div className="LatestProducts">
            <h2>NAJNOWSZE PRODUKTY</h2>
            {productsList
              .filter((product) => product.date === "2020-03-25")
              .map((product) => (
                <div
                  className="LatestProductsView"
                  key={`${product.id}-latest`}>
                  <Link to={`/produkty/${product.id}`}>
                    <img
                      src={product.img}
                      alt="Product"
                    />
                    <span>{product.name}</span>
                  </Link>
                  <p>
                    {product.discountPrice && <del>{product.mainPrice}</del>}
                    {product.discountPrice
                      ? ` ${product.discountPrice}`
                      : product.mainPrice}
                    zł
                  </p>
                </div>
              ))}
          </div>

          <div className="BestsellerProducts">
            <h2>BESTSELLERY</h2>
            {productsList
              .filter((product) => product.rating >= 4)
              .map((product) => (
                <div
                  className="BestsellerProductsView"
                  key={`${product.id}-bestseller`}>
                  <Link to={`/produkty/${product.id}`}>
                    <img
                      src={product.img}
                      alt="Product"
                    />
                    <span>{product.name}</span>
                  </Link>
                  <p>
                    {product.discountPrice && <del>{product.mainPrice}</del>}
                    {product.discountPrice
                      ? ` ${product.discountPrice}`
                      : product.mainPrice}
                    zł
                  </p>
                </div>
              ))}
          </div>
        </div>

        <div className="MainBanner">
          <p className="Description">
            <strong>Świece sojowe</strong> - Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}>
            <FormControl
              className="ProductsSorting"
              sx={{
                m: 1,
                minWidth: 150,
                backgroundColor: "white",
                textAlign: "center",
              }}
              size="small">
              <InputLabel id="ViewSort">Sortowanie</InputLabel>
              <Select
                sx={{ p: 0, m: 0 }}
                labelId="ViewSort"
                id="ViewSortProducts"
                value={sort}
                autoWidth
                label="Sortowanie"
                onChange={(e) => setSort(e.target.value)}>
                <MenuItem value="pro">Najniższa cena</MenuItem>
                <MenuItem value="pro2">Najwyższa cena</MenuItem>
              </Select>
            </FormControl>

            <FormControl
              className="ProductsSorting"
              sx={{
                m: 1,
                minWidth: 100,
                backgroundColor: "white",
                textAlign: "center",
              }}
              size="small">
              <InputLabel id="ViewSort">Pokaż</InputLabel>
              <Select
                labelId="ViewSort"
                id="ViewSortElements"
                value={filtr}
                label="Pokaż"
                autoWidth
                onChange={(e) => setFiltr(e.target.value)}>
                <MenuItem value="4">4</MenuItem>
                <MenuItem value="8">8</MenuItem>
                <MenuItem value="12">12</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <div className="MainBannerProductsStructure">
            {productsList
              .sort((a, b) => {
                if (sort === "pro") {
                  return a.numPrice - b.numPrice;
                } else {
                  return b.numPrice - a.numPrice;
                }
              })
              .slice(0, filtr || undefined)
              .map((product) => (
                <div
                  className="MainBannerProducts"
                  key={product.id}>
                  <Link to={`/produkty/${product.id}`}>
                    <img
                      src={product.img}
                      alt="Product"
                    />
                    <span>{product.name}</span>
                  </Link>
                  <p>
                    {product.discountPrice && <del>{product.mainPrice}</del>}
                    {product.discountPrice
                      ? ` ${product.discountPrice}`
                      : product.mainPrice}
                    zł
                  </p>
                  <button onClick={() => addToCart(product, 1)}>
                    Dodaj do koszyka
                  </button>
                </div>
              ))}
          </div>

          {/* <div className="MainBannerPageButtons">
            <button className="ProductsPage">1</button>
            <button className="ProductsPage">2</button>
            <button className="ProductsPage">3</button>
            <button className="ProductsPage">4</button>
            <button className="ProductsPage">5</button>
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};
