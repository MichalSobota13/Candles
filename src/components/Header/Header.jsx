import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <div className="Header">
      <div className="Navbar">
        <div className="Logo" />
        <div className="Navigation">
          <div className="NavLinks">
            <Link to="/">Strona Główna</Link>
            <Link to="/produkty">Produkty</Link>
            <Link to="/o-nas">O nas</Link>
            <Link to="/kontakt">Kontakt</Link>
          </div>
          <div className="NavIcons">
            <FontAwesomeIcon icon={faBasketShopping} />
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
      </div>
    </div>
  );
}