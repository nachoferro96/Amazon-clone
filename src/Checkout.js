import React from "react";
import "./checkout.css";
import Subtotal from "./Subtotal"
import CurrencyFormat from "react-currency-format"

function Checkout(){
    return <div className="checkout">
        <div className="checkout-left">
            <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" className="checkout-banner"/>
            <div className="checkout-title">
                <h2>Your shopping Basket</h2>
            </div>
        </div>
        <div className="checkout-right">
            <Subtotal />
        </div>
    </div>
}

export default Checkout