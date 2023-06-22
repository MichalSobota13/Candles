import "./HomePage.css";
import Main from "../../assets/Main.jpg";
import About from "../../assets/About.jpg";
import { Link } from "react-router-dom";
import productsList from "../../data/productsList";
import { Footer } from "../../components";
import { useCartContext } from "../Basket/CartContext.hooks";

export const HomePage = () => {
  const { addToCart } = useCartContext();

  return (
    <>
      <div className="HomeContainer">
        <div className="Banner">
          <img
            src={Main}
            alt="alal"
          />
          <div className="BannerContent">
            <h1>API CANDLES</h1>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <p>Diam dictum nulla nullam amet morbi eros id fringilla.</p>
            </span>
            <p>Sed quis morbi dictum aliquam tristique quis euismod id.</p>
            <button className="ButtonHome">DOWIEDZ SIĘ WIĘCEJ</button>
            <div className="NextBanner">
              {/* <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div> */}
            </div>
          </div>
        </div>

        <div className="MainContent">
          <h2>NAJNOWSZE</h2>

          <div className="MainContentLatest">
            {productsList.slice(0, 4).map((product) => (
              <div key={product.id}>
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

          <h2>BESTSELLERY</h2>
          <div className="MainContentLatest">
            {productsList.slice(0, 4).map((product) => (
              <div key={product.id}>
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
        </div>

        <div
          className="MainAbout"
          id="about">
          <img
            src={About}
            alt="about"
          />
          <div className="MainAboutText">
            <h2>KIM JESTEŚMY?</h2>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
                leo urna turpis semper sed a vulputate mi. Diam nisl non in et
                mattis. Sit pulvinar cursus integer lectus sagittis bibendum.
                Rhoncus cras diam tellus convallis.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
                leo urna turpis semper sed a vulputate mi. Diam nisl non in et
                mattis. Sit pulvinar cursus integer lectus sagittis bibendum.
                Rhoncus cras diam tellus convallis.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
                leo urna turpis semper sed a vulputate mi.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
