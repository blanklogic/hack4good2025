import React from "react";

function ItemCard({ item, isClicked, onItemClick }) {
  const handleInputClick = (e) => {
    e.stopPropagation();
  };

  const onButtonClick = (e) => {
    e.stopPropagation();
    console.log("Add to cart clicked");
  };

  return (
    <div className="item-card" onClick={onItemClick}>
      {!isClicked && <h2 className="text-xl font-bold">{item.name}</h2>}
      {isClicked && (
        <div class="item-card-info">
          <h2 className="text-xl font-bold">{`Vouchers required: ${item.price}`}</h2>
          <input type="number" placeholder="1" onClick={handleInputClick} />
          <button onClick={onButtonClick}>Add to cart</button>
        </div>
      )}
    </div>
  );
}

export default ItemCard;
