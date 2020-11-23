import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>The lean startup</p>
        <p className="product__price">
          <strong>19.99</strong>
          <small>€</small>
        </p>
        <div className="product_rating">
          <p>start</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
