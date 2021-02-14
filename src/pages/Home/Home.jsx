import React, { useContext } from "react";
import { ItemCard, BasketCard, BuyCard } from "../../components";
import { ReactComponent as Cross } from "../../assets/cross.svg";
import { DisplayContext } from "../../contexts/DisplayContext";
import items from "../../utils/items";
import "./Home.scss";

const Home = () => {
  const { display, setDisplay } = useContext(DisplayContext);

  return (
    <div className="home">
      <div className="home__wrapper">
        <div className="item-block">
          <ItemCard items={items} />
        </div>
        {window.innerWidth > 980 && (
          <div className="basket">
            <h3 className="basket__title">Krepšelis</h3>
            <Cross className="basket__icon" onClick={() => setDisplay(true)} />
            <BasketCard />
            <BuyCard />
          </div>
        )}
        {display && (
          <div className="basket">
            <h3 className="basket__title">Krepšelis</h3>
            <Cross
              className="basket__icon"
              onClick={() => setDisplay(!display)}
            />
            <BasketCard />
            <BuyCard />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
