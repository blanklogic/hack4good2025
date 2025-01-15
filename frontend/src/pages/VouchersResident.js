import axios from "axios";
import { React, useState } from "react";
import Category from "../components/Category";
import "../index.css";

/*Dummy Data*/
const ITEMS = [
  { name: "Item 1", price: "2" },
  { name: "Item 2", price: "3" },
  { name: "Item 3", price: "4" },
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
  return (
    <div className="voucher-categories mt-14 ml-96">
      <Category title="Food Items" items={ITEMS} /*Placeholder*/ />
      <Category title="Beverages" items={ITEMS} /*Placeholder*/ />
      <Category title="Cooking Materials" items={ITEMS} /*Placeholder*/ />
    </div>
  );
};

export default VouchersResident;
