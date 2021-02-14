import React, { useContext } from "react";
import { ReactComponent as TrashBin } from "../../assets/trash-bin.svg";
import { QuantityButton } from "../../components";
import { CartContext } from "../../contexts/CartContext";
import "./BasketCard.scss";

const BasketCard = () => {
  const { remove, cartItems } = useContext(CartContext);
  return (
    <>
      {cartItems.length === 0 && <p>No Item in the Cart!</p>}
      {cartItems.map((product) => (
        <div className="basket-card" key={product.id}>
          <figure className="basket-card__figure">
            <img
              className="basket-card__figure-img"
              src={product.image}
              alt="Product"
            />
          </figure>
          <div className="basket-card__container">
            <span className="basket-card__title">{product.title}</span>
            <QuantityButton
              id={product.id}
              spanClassNames="basket-card__span--none"
            />
          </div>
          <div className="basket-card__container">
            <TrashBin
              className="basket-card__icon"
              onClick={() => remove(product)}
            />
            <span className="basket-card__price">&euro;{product.price}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default BasketCard;
