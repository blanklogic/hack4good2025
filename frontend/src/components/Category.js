import React from "react";
import ItemCard from "./ItemCard";

function Category({ title, items, clickedItem, onItemClick, onAddToCart }) {
  return (
    <section className="category ml-12">
      <h1 className="text-5xl font-bold">{title}</h1>
      {items.map((item) => (
        <ItemCard
          key={item.id}
          item={item}
          isClicked={clickedItem === item.name}
          onItemClick={() => onItemClick(item.name)}
          onAddToCart={(quantity) => onAddToCart(item.name, quantity)}
        />
      ))}
    </section>
  );
}

export default Category;
