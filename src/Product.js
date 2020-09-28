import React from "react";
import "./Product.css";

export default function Product({title, image, price, rating}) {
  return (
    <div className="product">
      <div className="product_info">
        <p className="product_title">{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating).fill().map((_, i)=>(<p>🌟</p>))}
        </div>
      </div>
      <img
      /*src="{}"*/
        src={image}
        alt=""
      />

      <button>Add to basket</button>
    </div>
  );
}
