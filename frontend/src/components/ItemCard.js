import React, { useState } from "react";

function ItemCard({ item }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  const handleInputClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="item-card" onClick={handleClick}>
      {!isClicked && <h2 className="text-xl font-bold">{item.name}</h2>}
      {isClicked && (
        <div class="item-card-info">
          <h2 className="text-xl font-bold">{`Vouchers required: ${item.price}`}</h2>
          <input type="number" placeholder="1" onClick={handleInputClick} />
          <button>Add to cart</button>
        </div>
      )}
    </div>
  );
}

export default ItemCard;
