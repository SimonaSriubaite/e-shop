import React, { useContext } from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Cart } from "../../assets/cart.svg";
import { CartContext } from "../../contexts/CartContext";
import { Button } from "../../components";
import "./Header.scss";

const Header = () => {
  const { cartItems, sumItems } = useContext(CartContext);

  return (
    <div className="header">
      <div className="header__wrapper">
        <figure className="header__logo">
          <Logo alt="Barbora logo" />
        </figure>
        <Button type="cart" buttonClassNames="header__button">
          <Cart className="button__icon button__icon-cart" />
          {(cartItems.length > 0 && (
            <>
              <div className="button__quantity">{cartItems.length}</div>
              <span className="button__price">&euro;{sumItems}</span>
            </>
          )) || <span className="button__price">&euro;0.00</span>}
        </Button>
      </div>
    </div>
  );
};

export default Header;
