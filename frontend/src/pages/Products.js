import { React, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "../index.css";
import { useLocation } from "react-router";

const Products = () => {
  const { idToken } = useLocation();
  // dummy data
  const products_file = [
    {
      id: 1,
      name: "Organic Almonds",
      description: "Raw, organic almonds ideal for snacking and cooking",
      price: 15.0,
      stock: 20,
      image: "https://via.placeholder.com/150?text=Organic+Almonds",
      requested: false,
    },
    {
      id: 2,
      name: "Extra Virgin Olive Oil",
      description:
        "Cold-pressed, high-quality extra virgin olive oil for cooking and dressing",
      price: 10.0,
      stock: 30,
      image: "https://via.placeholder.com/150?text=Extra+Virgin+Olive+Oil",
      requested: false,
    },
    {
      id: 3,
      name: "Sparkling Water",
      description:
        "Refreshing and fizzy sparkling water, perfect for any time of the day",
      price: 5.0,
      stock: 0,
      image: "https://via.placeholder.com/150?text=Sparkling+Water",
      requested: false,
    },
    {
      id: 4,
      name: "Whole Wheat Pasta",
      description:
        "Nutritious whole wheat pasta, a great source of energy and fiber",
      price: 4.0,
      stock: 25,
      image: "https://via.placeholder.com/150?text=Whole+Wheat+Pasta",
      requested: false,
    },
    {
      id: 5,
      name: "Organic Tomato Sauce",
      description:
        "Rich and flavorful organic tomato sauce, perfect for pastas and pizzas",
      price: 8.0,
      stock: 15,
      image: "https://via.placeholder.com/150?text=Organic+Tomato+Sauce",
      requested: false,
    },
  ];

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

  const handleRequestClick = (id) => {
    setProducts(
      products_file.map((product) =>
        product.id === id ? { ...product, requested: true } : product
      )
    );
    toast.success("Request sent successfully");
  };

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
      <ToastContainer />
      <div className="ml-12 grid-container">
        {products_file.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3 className="font-bold">{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            {product.stock === 0 ? (
              <button
                className={`request-button ${
                  product.requested ? "bg-blue-200 text-white" : ""
                }`}
                onClick={() => handleRequestClick(product.id)}
                disabled={product.requested}
              >
                {product.requested ? "Product Requested" : "Request to Restock"}
              </button>
            ) : (
              <p>Stock Available: ${product.stock}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
