import React, { useState } from "react";

function ItemCart({ items, onBackButtonClicked }) {
  const [cartItems, setCartItems] = useState({ ...items });
  const handleSubmit = () => {
    //send data to backend for admin to verify
    console.log(cartItems);
  };
  const handleBackButton = () => onBackButtonClicked(cartItems);
  const handleChange = (itemName) => (e) => {
    const itemQuantity = Number(e.target.value);
    setCartItems((prevItems) => {
      if (itemQuantity === 0) {
        const { [itemName]: _, ...restItems } = prevItems;
        return restItems;
      } else {
        return {
          ...prevItems,
          [itemName]: itemQuantity,
        };
      }
    });
  };

  return (
    <section className="item-cart-container">
      <div className="item-cart">
        <h1 className="text-2xl font-bold mt-4">Item Cart</h1>
        {Object.keys(cartItems).length !== 0 && (
          <div className="item-cart-items mt-4">
            {Object.entries(cartItems).map(([itemName, quantity]) => (
              <div className="item-cart-item" key={itemName}>
                <h2 className="text-xl font-bold">{itemName}</h2>
                <input
                  type="number"
                  min="0"
                  defaultValue={quantity}
                  onChange={handleChange(itemName)}
                />
              </div>
            ))}
            <div className="item-cart-buttons">
              <button onClick={() => handleBackButton()}>Return to Menu</button>
              <button onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        )}
        {Object.keys(cartItems).length === 0 && (
          <>
            <p>No items in cart</p>
            <div className="item-cart-buttons">
              <button onClick={() => handleBackButton()}>Return to Menu</button>
              <button onClick={handleSubmit}>Submit</button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default ItemCart;
