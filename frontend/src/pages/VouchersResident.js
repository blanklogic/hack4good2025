import axios from "axios";
import { React, useRef, useState } from "react";
import Category from "../components/Category";
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
    const url = process.env.REACT_APP_API_URL + `/voucher-balance`; // change based on api request url
    const configs = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    };
    const response = await axios.get(url, configs);
    const data = await response.data.key;
    setVouchers(data);
  }
  const [clickedItem, setClickedItem] = useState(null);
  const clickedItemRef = useRef(null);

  const handleItemClick = (itemName) => {
    if (clickedItemRef.current === itemName) {
      setClickedItem(null);
      clickedItemRef.current = null;
    } else {
      setClickedItem(itemName);
      clickedItemRef.current = itemName;
    }
  };

  return (
    <div className="voucher-categories mt-14 ml-96">
      <Category
        title="Food Items"
        items={FOODITEMS}
        clickedItem={clickedItem}
        onItemClick={handleItemClick} /*Placeholder*/
      />
      <Category
        title="Beverages"
        items={BEVERAGEITEMS}
        clickedItem={clickedItem}
        onItemClick={handleItemClick} /*Placeholder*/
      />
      <Category
        title="Cooking Materials"
        items={COOKINGITEMS}
        clickedItem={clickedItem}
        onItemClick={handleItemClick} /*Placeholder*/
      />
    </div>
  );
};

export default VouchersResident;
