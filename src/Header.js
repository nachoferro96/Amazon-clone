import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

const Header = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
          className="logo"
        />
      </Link>

      <div className="contenedor_buscador">
        <input className="input" type="text" />
        <SearchIcon className="lupa" />
      </div>

      <div className="botoncitos">
        <Link to="/login">
          <div className="sign_in">
            <span className="guest">Hello Guest</span>
            <span className="span_sign">Sign In</span>
          </div>
        </Link>

        <div className="sign_in">
          <span className="guest">Returns</span>
          <span className="span_sign">and Orders</span>
        </div>
        <div className="sign_in">
          <span className="guest">Your</span>
          <span className="span_sign">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="canasta">
            <ShoppingBasketIcon />
            <span className="span_sign basket">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
