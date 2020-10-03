import React from "react"
import "./CheckoutProduct.css"
import { useStateValue } from "./StateProvider"

function CheckoutProduct({id , image , title, price, rating}){
    const [{ basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE-FROM-BASKET",
            id: id,
        })
    }

    return (
        <div className="CheckoutProduct">
            <div className="contenedorimagen">
                <img className="checkout-product-img" src={image}/>
            </div>
            

            <div className="checkoutproduct-info">
                <p className="checkoutproduct-title">{title}</p>
                <p className="checkoutproduct-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutproduct-rating">
                {Array(rating).fill().map((_, i)=>(<p>🌟</p>))}
                </div>
                <button className="botoncillo" onClick={removeFromBasket}>Remove from the Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct