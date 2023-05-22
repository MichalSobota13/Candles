import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping, faUser, faListUl } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import Logo from "../../assets/logo-api-black.svg"
import { useState } from "react"

export const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="Header">
      <div className="Navbar">
        <div className="Logo">
          <img src={Logo} alt="" />
        </div>
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
          <div className="Burger" onClick={() => setOpen(!open)}>
            <FontAwesomeIcon icon={faListUl} />
          </div>
        </div>
      </div>
      {
        open && <div className="Menu">
            <Link to="/">Strona Główna</Link>
            <Link to="/produkty">Produkty</Link>
            <Link to="/o-nas">O nas</Link>
            <Link to="/kontakt">Kontakt</Link>
          </div>
      }
    </div>
  );
}