import { React, useState } from "react";
import "../index.css";

const Products = () => {
  // const callbacksRef = useRef(() => callbacks());
  // useEffect(() => {
  //   callbacksRef.current();
  // }, []);

  // async function callbacks() {
  //   await getProducts();
  // }

  const [products, setProducts] = useState([]);
  async function getProducts() {
    try {
      const url = process.env.API_URL + `/admins/products`; // change based on api request url
      const response = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${idToken}`,
          "Content-Type": "application/json",
        },
      };
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error calling backend:", error.message);
    }
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
