import "./Footer.css"
import { Link } from "react-router-dom"
import Logo from "../../assets/logo-api-white.svg"


export const Footer = () => {
  return (
    <div className="Footer" id="footer">
      <div className="FooterNavigation">
        <div className="FooterLogo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="FooterContact">
          <h2>KONTAKT</h2>
          <strong>API Group</strong>
          <p>Osiedle Bohaterów Września 84D/68</p>
          <p>31-621 Kraków</p>
        </div>
        <div className="FooterNavLinks">
          <h2>NAWIGACJA</h2>
          <Link to="/">STRONA GŁÓWNA</Link>
          <Link to="/produkty">PRODUKTY</Link>
          <Link to="/o-nas">O NAS</Link>
          <a href="#footer">KONTAKT</a>
        </div>
        <div className="FooterNewsletter">
          <h2>NEWSLETTER</h2>
          <span>Zapisz się na newsletter i odbierz -10% zniżki.</span>
          <input id="email" type="email" placeholder="Wpisz adres e-mail" />
          <button>Wyślij</button>
          <label>
            <input type="checkbox" name="checkbox" id="policy" />
            Akceptuję <a href="/" target={"_blank"} id="privatPolicy"><strong>politykę prywatności.</strong></a>
            </label>
          <p>Wyrażam zgodę na przetwarzanie danych Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
      </div>
    </div>
  );
} 