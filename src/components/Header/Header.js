import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Cart } from "../../assets/cart.svg";
import { Button } from "../../components";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__wrapper">
        <figure className="header__logo">
          <Logo alt="Barbora logo" />
        </figure>
        <Button type="cart" buttonClassNames="header__button">
          <Cart className="button__icon button__icon-cart" />
          <span className="button__price">&euro;1.79</span>
        </Button>
      </div>
    </div>
  );
};

export default Header;
