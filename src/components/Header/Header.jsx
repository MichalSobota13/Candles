import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping, faUser, faListUl } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import Logo from "../../assets/logo-api-black.svg"
import { useState } from "react"

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="Header">
      <div className="Navbar">
        <div className="Logo">
          <img src={Logo} alt="" />
        </div>
        <div className="Navigation">
          <div className="NavLinks">
            <Link to="/">STRONA GŁÓWNA</Link>
            <Link to="/produkty">PRODUKTY</Link>
            <a href="#about">O NAS</a>
            <a href="#footer">KONTAKT</a>
          </div>
          <div className="NavIcons">
            <a href="/basket"><FontAwesomeIcon icon={faBasketShopping} /></a>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="Burger" onClick={() => setOpen(!open)}>
            <FontAwesomeIcon icon={faListUl} />
          </div>
        </div>
      </div>
      {
        open && <div className="Menu">
            <Link to="/">STRONA GŁÓWNA</Link>
            <Link to="/produkty">PRODUKTY</Link>
            <a href="#about">O NAS</a>
            <a href="#footer">KONTAKT</a>
          </div>
      }
    </div>
  );
}