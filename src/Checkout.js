import React from "react";
import "./checkout.css";
import Subtotal from "./Subtotal"
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct"

function Checkout(){
    const [{ basket, user }, dispatch] =useStateValue();
    return <div className="checkout">
        <div className="checkout-left">
            <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" className="checkout-banner"/>
            <div className="checkout-title">
                <h3>Hello, {user?.email}</h3>
                <h2 className="checkout-title">Your shopping Basket</h2>

                {basket.map(item=> (
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}/>
                ))}
                {/* CheckooutProduct */}
                {/* CheckooutProduct */}
                {/* CheckooutProduct */}

            </div>
        </div>
        <div className="checkout-right">
            <Subtotal />
        </div>
    </div>
}

export default Checkout