import React from "react";
import { ReactComponent as Heart } from "../../assets/heart.svg";
import { Button } from "../../components";
import PropTypes from "prop-types";
import "./ItemCard.scss";

const ItemCard = (props) => {
  return (
    <div className="card">
      <Heart className="card__icon" />
      <div className="card__wrapper">
        <figure className="card__figure">
          <img className="card__figure-img" src={props.img} alt="product" />
        </figure>
        <span className="card__title">{props.title}</span>
        <span className="card__price">&euro;{props.price}</span>
        <Button type="add" buttonClassNames="card__button">
          Į krepšelį
        </Button>
      </div>
    </div>
  );
};

ItemCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
};

export default ItemCard;
