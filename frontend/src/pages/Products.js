import React from "react";
import "../index.css";

const Products = () => {
  return (
    <div>
      <div className="products-top-container">
        <h1>Available Products</h1>
        <input
          type="text"
          placeholder="search for products..."
          className="products-search"
        />
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
