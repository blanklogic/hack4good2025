import { React, useContext, useRef, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AuthContext } from "../AuthContext";
import Category from "../components/Category";
import ItemCart from "../components/ItemCart";
import database from "../database.json";
import "../index.css";

/*Dummy Data*/
const FOODITEMS = database[0];
const BEVERAGEITEMS = database[1];
const COOKINGITEMS = database[2];

const VouchersResident = () => {
  //   const callbacksRef = useRef(() => callbacks());
  //   useEffect(() => {
  //     callbacksRef.current();
  //   }, []);

  //     async function callbacks() {
  //       await getVouchersData();
  //     }
  const { idToken } = useContext(AuthContext);
  const [vouchers, setVouchers] = useState([]);

  async function getVouchersData() {
    try {
      const url = process.env.API_URL + `/residents/voucher-balance`; // change based on api request url

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
    setCartItems((prevItems) => {
      if (itemQuantity > 0) {
        return {
          ...prevItems,
          [itemName]: prevItems[itemName]
            ? Number(prevItems[itemName]) + itemQuantity
            : itemQuantity,
        };
      } else {
        return prevItems;
      }
    });
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
        <section className="mb-8">
          <div class="cart-topbar">
            <button onClick={handleCartVisibility} className="cart-button">
              <MdOutlineShoppingCart className="inline-block mb-1 mr-1 size-7" />
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
