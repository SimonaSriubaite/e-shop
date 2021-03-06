import React, { useContext } from "react";
import { ReactComponent as TrashBin } from "../../assets/trash-bin.svg";
import { ReactComponent as Cart } from "../../assets/cart.svg";
import { QuantityButton } from "../../components";
import { CartContext } from "../../contexts/CartContext";
import "./BasketCard.scss";

const BasketCard = () => {
  const { remove, cartItems } = useContext(CartContext);
  return (
    <>
      {cartItems.length === 0 && (
        <div className="basket-empty">
          <Cart className="basket-empty__icon" />
          <span className="basket-empty__title">Krepšelis tuščias</span>
        </div>
      )}
      <div className="basket-wrapper">
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
              <QuantityButton id={product.id} />
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
      </div>
    </>
  );
};

export default BasketCard;
