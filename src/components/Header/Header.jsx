import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping, faUser, faListUl } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import Logo from "../../assets/logo-api-black.svg"
import { useState } from "react"
import { useCartContext } from "../../pages"

export const Header = () => {
  const [open, setOpen] = useState(false);
  const {productCount} = useCartContext();

  return (
    <div className="Header">
      <div className="Navbar">
        <div className="Logo">
          <Link to="/">
          <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="Navigation">
          <div className="NavLinks">
            <Link to="/">STRONA GŁÓWNA</Link>
            <Link to="/produkty">PRODUKTY</Link>
            <Link to="/o-nas">O NAS</Link>
            <a href="#footer">KONTAKT</a>
          </div>
          <div className="NavIcons">
            <Link to="/koszyk">
              <FontAwesomeIcon icon={faBasketShopping} />
                <span><sup>{productCount}</sup></span>
            </Link>
            <Link to="/login">
              <FontAwesomeIcon icon={faUser} />
            </Link>
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
            <Link to="/o-nas">O NAS</Link>
            <a href="#footer">KONTAKT</a>
          </div>
      }
    </div>
  );
}