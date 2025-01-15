import { React, useState, useEffect, useRef } from "react";
import "../index.css";
import axios from "axios";

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
  return <div></div>;
};

export default VouchersResident;
