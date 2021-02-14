import React from "react";
import { ItemCard, BasketCard, BuyCard } from "../../components";
import items from "../../utils/items";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="home__wrapper">
        <div className="item-block">
          <ItemCard items={items} />
        </div>
        <div className="basket">
          <h3 className="basket__title">Krepšelis</h3>
          <BasketCard />
          <BuyCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
