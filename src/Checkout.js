import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/08/FR-hq/2020/img/Giftcard/XCM_Manual_1286232_1476529_FR_GH20_fr_it_es_frites_gclp_fr_fr_3542995_1500x150_fr_FR.jpg"
          alt="banniere ad"
        />
        <div>
          <h2 className="checkout__title">Your shopping basket</h2>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
