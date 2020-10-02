import React from "react";
import CurrencyFormat from "react-currency-format";
import "./subtotal.css";
import { useStateValue } from "./StateProvider";
import { getbaskettotal } from "./Reducer";

function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items): <strong>{value}</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getbaskettotal(basket)} //error aca no identificado aun
        displayType={"text"}
        thousandsSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
