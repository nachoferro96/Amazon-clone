import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

const Header = () => {
  return (
    <div className="header">
      <img
        src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
        className="logo"
      />

      <div className="contenedor_buscador">
        <input className="input" type="text" />
        <SearchIcon className="lupa" />
      </div>

      <div className="botoncitos">
        <div className="sign_in">
          <span className="guest">Hello Guest</span>
          <span className="span_sign">Sign In</span>
        </div>
        <div className="sign_in">
          <span className="guest">Returns</span>
          <span className="span_sign">and Orders</span>
        </div>
        <div className="sign_in">
          <span className="guest">Your</span>
          <span className="span_sign">Prime</span>
        </div>
        <div className="canasta">
          <ShoppingBasketIcon />
          <span className="span_sign basket">0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
