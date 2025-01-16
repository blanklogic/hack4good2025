import React, { useState } from "react";
import ItemCard from "./ItemCard";

function Category({ title, items }) {
  const [clickedItem, setClickedItem] = useState(null);

  const handleItemClick = (itemName) => {
    setClickedItem((prev) => (prev === itemName ? null : itemName));
  };

  return (
    <section className="category ml-12">
      <h1 className="text-5xl font-bold">{title}</h1>
      {items.map((item) => (
        <ItemCard
          key={item.name}
          item={item}
          isClicked={clickedItem === item.name}
          onItemClick={() => handleItemClick(item.name)}
        />
      ))}
    </section>
  );
}

export default Category;
