import React from "react";
import "./Product.css";

export default function Product() {
  return (
    <div className="product">
      <div className="product_info">
        <p>Libro de React JS </p>
        <p className="product_price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product_rating">
          <p>🌟</p>
        </div>
      </div>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/41301Q9P5NL.jpg"
        alt=""
      />

      <button>Add to basket</button>
    </div>
  );
}
