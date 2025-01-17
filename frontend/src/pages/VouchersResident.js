import { React, useRef, useState } from "react";
import Category from "../components/Category";
import ItemCart from "../components/ItemCart";
import "../index.css";

/*Dummy Data*/
const FOODITEMS = [
  { name: "Watermelon", description: "A juicy whole watermelon", price: "2" },
  { name: "Hamburger", description: "A mouth-watering hamburger", price: "3" },
  { name: "Indomee", description: "A delectable meal", price: "2" },
];
const BEVERAGEITEMS = [
  { name: "Coke", description: "A classic delight", price: "2" },
  {
    name: "Sprite",
    description: "A transparent sweet carbonated syrup drink",
    price: "3",
  },
  { name: "Mountain Dew", description: "Eww", price: "2" },
];
const COOKINGITEMS = [
  { name: "Flour", description: "A juicy whole watermelon", price: "2" },
  { name: "Cabbage", description: "A mouth-watering hamburger", price: "3" },
  { name: "Chicken Breast", description: "A delectable meal", price: "2" },
];

const VouchersResident = () => {
  //   const callbacksRef = useRef(() => callbacks());
  //   useEffect(() => {
  //     callbacksRef.current();
  //   }, []);

  //     async function callbacks() {
  //       await getVouchersData();
  //     }
  const [vouchers, setVouchers] = useState([]);
  async function getVouchersData() {
    try {
      const url = process.env.API_URL + `/residents/voucher-balance`; // change based on api request url
      //    const idToken = await getIdToken();

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          //        Authorization: `Bearer ${idToken}`, // Send ID Token in Authorization header
        },
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      console.log("API Response:", data);
      setVouchers(data);
    } catch (error) {
      console.error("Error calling backend:", error.message);
    }
  }

  const [clickedItem, setClickedItem] = useState(null);
  const clickedItemRef = useRef(null); // stores a string containing the clicked item's name

  const handleItemClick = (itemName) => {
    if (clickedItemRef.current === itemName) {
      setClickedItem(null);
      clickedItemRef.current = null;
    } else {
      setClickedItem(itemName);
      clickedItemRef.current = itemName;
    }
  };

  /* Handles cart visibility */
  const [isCartVisible, setIsCartVisible] = useState(false);
  const handleCartVisibility = () => {
    setIsCartVisible((prevVisibility) => !prevVisibility);
  };

  /* Handles sending data to cart */
  const [cartItems, setCartItems] = useState({});
  const handleBackButton = (items) => {
    setIsCartVisible(false);
    setCartItems(items);
  };
  const handleAddToCart = (itemName, itemQuantity) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [itemName]: prevItems[itemName]
        ? Number(prevItems[itemName]) + itemQuantity
        : itemQuantity,
    }));
  };

  return (
    <>
      {isCartVisible && (
        <ItemCart
          items={cartItems}
          onBackButtonClicked={handleBackButton}
          //onSubmit={(items) => setCartItems(items)}
        />
      )}
      {!isCartVisible && (
        <section>
          <div class="cart-topbar">
            <button onClick={handleCartVisibility} className="cart-button">
              View Cart
            </button>
          </div>
          <div className="voucher-categories mt-20 ml-96">
            <Category
              title="Food Items"
              items={FOODITEMS} /*Placeholder*/
              clickedItem={clickedItem}
              onItemClick={handleItemClick}
              onAddToCart={handleAddToCart}
            />
            <Category
              title="Beverages"
              items={BEVERAGEITEMS} /*Placeholder*/
              clickedItem={clickedItem}
              onItemClick={handleItemClick}
              onAddToCart={handleAddToCart}
            />
            <Category
              title="Cooking Materials"
              items={COOKINGITEMS} /*Placeholder*/
              clickedItem={clickedItem}
              onItemClick={handleItemClick}
              onAddToCart={handleAddToCart}
            />
          </div>
        </section>
      )}
    </>
  );
};

export default VouchersResident;
