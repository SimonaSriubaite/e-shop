import React from "react";
import { ItemCard } from "../../components";
import items from "../../utils/items";
import "./ItemBlock.scss";

const ItemBlock = () => {
  return (
    <div className="item-block">
      {items &&
        items.map((item) => {
          return (
            <ItemCard
              key={item.id}
              img={item.image}
              title={item.title}
              price={item.price}
            />
          );
        })}
    </div>
  );
};

export default ItemBlock;
