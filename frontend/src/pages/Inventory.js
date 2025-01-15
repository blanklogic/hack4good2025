import React from "react";
import "../index.css";

const Inventory = () => {
  return (
    <div className="mt-14 ml-96">
      <div className="ml-12">
        <div className="flex justify-between">
          <h1 className="text-5xl font-bold">Inventory</h1>
          <button className="add-product-button">Add Product</button>
        </div>
        <div className="grid-container">
          <div className="product-card">
            <img
              src="https://via.placeholder.com/150"
              alt="product"
              className="product-image"
            />
            <h3>Product Name</h3>
            <p>Product Description</p>
            <p>Stock Available: 10</p>
          </div>
          <div className="product-card">
            <img
              src="https://via.placeholder.com/150"
              alt="product"
              className="product-image"
            />
            <h3>Product Name</h3>
            <p>Product Description</p>
            <p>Stock Available: 3</p>
          </div>
          <div className="product-card">
            <img
              src="https://via.placeholder.com/150"
              alt="product"
              className="product-image"
            />
            <h3>Product Name</h3>
            <p>Product Description</p>
            <p>Stock Available: 6</p>
          </div>
          <div className="product-card">
            <img
              src="https://via.placeholder.com/150"
              alt="product"
              className="product-image"
            />
            <h3>Product Name</h3>
            <p>Product Description</p>
            <p>Stock Available: 4</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
