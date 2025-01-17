import React, { useState } from "react";

function ItemCart({ items, onBackButtonClicked }) {
  const [cartItems, setCartItems] = useState({ ...items });
  const handleSubmit = () => {
    //send data to backend for admin to verify
    console.log(cartItems);
  };
  const handleBackButton = () => onBackButtonClicked(cartItems);
  const handleChange = (itemName) => (e) => {
    const itemQuantity = e.target.value;
    setCartItems((prevItems) => ({
      ...prevItems,
      [itemName]: itemQuantity,
    }));
  };

  return (
    <section className="item-cart-container">
      <div className="item-cart">
        <h2 className="text-2xl font-bold">Item Cart</h2>
        <div className="item-cart-items">
          {cartItems.map((item) => (
            <div className="item-cart-item" key={item.id}>
              <h3 className="text-xl font-bold">{item.name}</h3>
              <input
                type="number"
                min="0"
                value={item.quantity}
                onChange={handleChange(item.name)}
              />
            </div>
          ))}
        </div>
        <button onClick={() => handleBackButton()}>Return to Items Page</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </section>
  );
}

export default ItemCart;
