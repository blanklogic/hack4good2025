import React, { useState } from "react";

function ItemCard({ item, isClicked, onItemClick, onAddToCart }) {
  const [quantity, setQuantity] = useState(0);

  const handleInputClick = (e) => {
    e.stopPropagation();
  };

  const handleInputChange = (e) => {
    const newQuantity = Number(e.target.value);
    setQuantity(newQuantity);
  };

  const onButtonClick = (e) => {
    e.stopPropagation();
    onAddToCart(quantity);
    setQuantity(0);
  };

  return (
    <div className="item-card" onClick={onItemClick}>
      {!isClicked && <h2 className="text-xl font-bold">{item.name}</h2>}
      {isClicked && (
        <div class="item-card-info">
          <h2 className="text-xl font-bold">{`Vouchers required: ${item.price}`}</h2>
          <input
            type="number"
            min="0"
            onClick={handleInputClick}
            onChange={handleInputChange}
            value={quantity}
          />
          <button onClick={onButtonClick}>Add to cart</button>
        </div>
      )}
    </div>
  );
}

export default ItemCard;
