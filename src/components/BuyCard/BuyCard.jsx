import React, { useContext } from "react";
import { ReactComponent as Info } from "../../assets/info.svg";
import { Button } from "../../components";
import { CartContext } from "../../contexts/CartContext";
import "./BuyCard.scss";

const BuyCard = () => {
  const { sumItems } = useContext(CartContext);
  return (
    <div className="buy-card">
      <Button type="buy" disabled={true}>
        Pirkti
      </Button>
      <div className="buy-card__container">
        <span className="buy-card__span">Kaina</span>
        <Info className="buy-card__icon" />
        <div className="buy-card__sum">
          &euro;{sumItems > 0 ? sumItems : "0.00"}
        </div>
      </div>
    </div>
  );
};

export default BuyCard;
