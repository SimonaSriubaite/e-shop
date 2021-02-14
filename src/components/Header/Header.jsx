import React, { useContext, useState, useEffect } from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Cart } from "../../assets/cart.svg";
import { ReactComponent as MobileCart } from "../../assets/mobile-basket.svg";
import { Link } from "react-router-dom";
import { DisplayContext } from "../../contexts/DisplayContext";
import { CartContext } from "../../contexts/CartContext";
import { Button } from "../../components";
import "./Header.scss";

const Header = () => {
  const { cartItems, sumItems } = useContext(CartContext);
  const { display, setDisplay } = useContext(DisplayContext);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  useEffect(() => {}, [width]);

  return (
    <div className="header">
      <div className="header__wrapper">
        <Link to="/">
          <figure className="header__logo">
            <Logo alt="Barbora logo" />
          </figure>
        </Link>
        {window.innerWidth > 980 ? (
          <Button type="cart" buttonClassNames="header__button">
            <Cart className="button__icon button__icon-cart" />
            <MobileCart className="button__icon button__icon-mobile" />
            {(cartItems.length > 0 && (
              <>
                <div className="button__quantity">{cartItems.length}</div>
                <span className="button__price">&euro;{sumItems}</span>
              </>
            )) || <span className="button__price">&euro;0.00</span>}
          </Button>
        ) : (
          <Button
            type="cart"
            buttonClassNames="header__button"
            onClick={() => setDisplay(!display)}
          >
            <Cart className="button__icon button__icon-cart" />
            <MobileCart className="button__icon button__icon-mobile" />
            {(cartItems.length > 0 && (
              <>
                <div className="button__quantity">{cartItems.length}</div>
                <span className="button__price">&euro;{sumItems}</span>
              </>
            )) || <span className="button__price">&euro;0.00</span>}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;
