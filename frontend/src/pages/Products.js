import { React, useState } from "react";
import "../index.css";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  async function getProducts() {
    const url = process.env.REACT_APP_API_URL + `/`; // change based on api request url
    const configs = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    };
    const response = await axios.get(url, configs);
    const data = await response.data.key;
    setProducts(data);
  }
  return (
    <div className="mt-14 ml-96 pl-24">
      <div className="ml-12 flex justify-between">
        <h1 className="text-5xl font-bold">Available Products</h1>
        <input
          type="text"
          placeholder="search for products..."
          className="products-search font-bold mr-8 border-[#2b3491] border-2"
        />
      </div>
      <div className="ml-12 grid-container">
        <div className="product-card">
          <img
            src="https://via.placeholder.com/150"
            alt="product"
            className="product-image"
          />
          <h3>Product Name</h3>
          <p>Product Description</p>
          <p>Price: $10.00</p>
          <button className="request-button">Request to restock</button>
        </div>
        <div className="product-card">
          <img
            src="https://via.placeholder.com/150"
            alt="product"
            className="product-image"
          />
          <h3>Product Name</h3>
          <p>Product Description</p>
          <p>Price: $10.00</p>
        </div>
        <div className="product-card">
          <img
            src="https://via.placeholder.com/150"
            alt="product"
            className="product-image"
          />
          <h3>Product Name</h3>
          <p>Product Description</p>
          <p>Price: $10.00</p>
        </div>
        <div className="product-card">
          <img
            src="https://via.placeholder.com/150"
            alt="product"
            className="product-image"
          />
          <h3>Product Name</h3>
          <p>Product Description</p>
          <p>Price: $10.00</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
