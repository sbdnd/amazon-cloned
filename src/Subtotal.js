import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

function Subtotal() {
  const [{ basket }] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Sous-total ({basket.length}{" "}
              {basket.length > 1 ? "Commandes" : "commande"} ):{" "}
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> Cette commande contient un cadeau
            </small>
          </>
        )}
        decimalScale={2}
        value={basket.length}
        displayType={"text"}
        thousandSeparator={true}
        suffix={" €"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
