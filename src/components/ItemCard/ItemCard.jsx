import React, { useContext } from "react";
import { ReactComponent as Heart } from "../../assets/heart.svg";
import { ReactComponent as Gluten } from "../../assets/gluten.svg";
import { Button, QuantityButton } from "..";
import { CartContext } from "../../contexts/CartContext";
import "./ItemCard.scss";
import items from "utils/items";

const ItemCard = () => {
  const { add, cartItems } = useContext(CartContext);
  const isInCart = (id) => cartItems.some((item) => item.id === id);

  return (
    <>
      {items &&
        items.map((product) => (
          <div className="card" key={product.id}>
            <Heart className="card__icon" />
            {product.glutenFree && (
              <Gluten className="card__icon card__icon-gluten" />
            )}
            <div className="card__wrapper">
              <figure className="card__figure">
                <img
                  className="card__figure-img"
                  src={product.image}
                  alt="product"
                />
              </figure>
              <span className="card__title">{product.title}</span>
              <span className="card__price">&euro;{product.price}</span>
              {isInCart(product.id) ? (
                <>
                  <QuantityButton product={product} id={product.id} />
                </>
              ) : (
                <Button
                  type="add"
                  buttonClassNames="card__button"
                  onClick={() => add(product)}
                >
                  Į krepšelį
                </Button>
              )}
            </div>
          </div>
        ))}
    </>
  );
};

export default ItemCard;
