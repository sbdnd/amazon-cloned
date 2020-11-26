import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon_logo"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">
            Bonjour, Identifiez-vous
          </span>
          <span className="header__optionLineTwo">Compte et listes</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Retours</span>
          <span className="header__optionLineTwo">et Commandes</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Votre</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <div className="header__optionBasket__container">
          <Link to="/checkout">
            <div className="header__optionBasket">
              <span className="header__optionLineTwo header_basketCount">
                {basket?.length}
              </span>
              <ShoppingCartIcon fontSize="small" />
            </div>
          </Link>
          <Link to="/checkout">
            <div className="header__option header__panier">
              <span className="header__optionLineTwo">Panier</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
