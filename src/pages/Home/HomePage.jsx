import "./HomePage.css"
import Main from "../../assets/Main.jpg"
import Product from "../../assets/Product.jpg"
import About from "../../assets/About.jpg"

export const HomePage = () => {
  return (
    <div className="HomeContainer">
      <div className="Banner">
        <img src={Main} alt="alal" />
        <div className="BannerContent">
          <h1>API CANDLES</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <p>
              Diam dictum nulla nullam amet morbi eros id fringilla. 
            </p>
          </span>
          <p>
            Sed quis morbi dictum aliquam tristique quis euismod id.
          </p>
          <button className="ButtonHome">DOWIEDZ SIĘ WIĘCEJ</button>
          <div className="NextBanner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="MainContent">
        <h2>NAJNOWSZE</h2>
        <div className="MainContentLatest">
          <div>
            <img src={Product} alt="Product" />
            <span>Soy Candle</span>
            <p>89,00zł</p>
            <button>Dodaj do koszyka</button>
          </div>
          <div>
            <img src={Product} alt="Product" />
            <span>Soy Candle</span>
            <p>89,00zł</p>
            <button>Dodaj do koszyka</button>
          </div>
          <div>
            <img src={Product} alt="Product" />
            <span>Soy Candle</span>
            <p>89,00zł</p>
            <button>Dodaj do koszyka</button>
          </div>
          <div>
            <img src={Product} alt="Product" />
            <span>Soy Candle</span>
            <p>89,00zł</p>
            <button>Dodaj do koszyka</button>
          </div>
        </div>
        <h2>BESTSELLERY</h2>
        <div className="MainContentLatest">
          <div>
            <img src={Product} alt="Product" />
            <span>Soy Candle</span>
            <p>89,00zł</p>
            <button>Dodaj do koszyka</button>
          </div>
          <div>
            <img src={Product} alt="Product" />
            <span>Soy Candle</span>
            <p>89,00zł</p>
            <button>Dodaj do koszyka</button>
          </div>
          <div>
            <img src={Product} alt="Product" />
            <span>Soy Candle</span>
            <p>89,00zł</p>
            <button>Dodaj do koszyka</button>
          </div>
          <div>
            <img src={Product} alt="Product" />
            <span>Soy Candle</span>
            <p>89,00zł</p>
            <button>Dodaj do koszyka</button>
          </div>
        </div>
      </div>
      <div className="MainAbout">
        <img src={About} alt="about" />
        <div className="MainAboutText">
          <h2>Kim jesteśmy?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam leo urna turpis semper sed a vulputate mi. Diam nisl non in et mattis. Sit pulvinar cursus integer lectus sagittis bibendum. Rhoncus cras diam tellus convallis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam leo urna turpis semper sed a vulputate mi. Diam nisl non in et mattis. Sit pulvinar cursus integer lectus sagittis bibendum. Rhoncus cras diam tellus convallis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam leo urna turpis semper sed a vulputate mi.</p>
        </div>
      </div>
    </div>
  );
}