import React from "react";
import "../index.css";

const Products = () => {
  return (
    <div className="mt-14 ml-96">
      <div className="ml-12 flex justify-between">
        <h1 className="text-5xl font-bold">Available Products</h1>
        <input
          type="text"
          placeholder="search for products..."
          className="products-search font-bold"
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
