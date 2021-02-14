import React, { useContext } from "react";
import { Button } from "../../components";
import PropTypes from "prop-types";
import { CartContext } from "../../contexts/CartContext";
import { ReactComponent as Minus } from "../../assets/minus.svg";
import { ReactComponent as Plus } from "../../assets/plus.svg";
import "./QuantityButton.scss";

const QuantityButton = (product) => {
  const { increase, decrease, cartItems, remove } = useContext(CartContext);

  const findQuantity = (id, cartItems) =>
    cartItems.find((item) => item.id === id).quantity;

  const productQuantity = findQuantity(product.id, cartItems);

  return (
    <div className="qbutton">
      <span className="qbutton__span">
        Krepšelyje <strong>{productQuantity} vnt.</strong>
      </span>
      <Button
        type="quantity"
        buttonClassNames="qbutton__minus"
        onClick={() => {
          productQuantity > 1 ? decrease(product) : remove(product);
        }}
      >
        <Minus className="qbutton__minus-icon" />
      </Button>
      <div className="qbutton__qty">
        <span className="qbutton__qty-span">{productQuantity}</span>
        <span className="qbutton__qty-span qbutton__qty-span--vnt">vnt.</span>
      </div>
      <Button
        type="quantity"
        buttonClassNames="qbutton__plus"
        onClick={() => increase(product)}
      >
        <Plus className="qbutton__plus-icon" />
      </Button>
    </div>
  );
};

QuantityButton.propTypes = {
  product: PropTypes.object,
};

export default QuantityButton;
