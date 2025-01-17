import React, { useState, useEffect } from "react";
import "../index.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Inventory = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState(null);

  const mockData = [
    {
      id: 1,
      name: "Product 1",
      description: "Description for Product 1",
      quantity: 10,
      price: 25.99,
      image: "https://via.placeholder.com/150",
      requested: false,
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description for Product 2",
      quantity: 5,
      price: 10.49,
      image: "https://via.placeholder.com/150",
      requested: false,
    },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setProducts(mockData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleAddProduct = () => {
    setIsEditing(false);
    resetForm();
    setIsModalOpen(true);
  };

  const handleEditProduct = (product) => {
    setIsEditing(true);
    setCurrentProduct(product);
    setName(product.name);
    setDescription(product.description);
    setQuantity(product.quantity);
    setPrice(product.price);
    setIsModalOpen(true);
  };

  const handleDeleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    toast.success("Product deleted successfully!");
  };

  const resetForm = () => {
    setName("");
    setDescription("");
    setQuantity(0);
    setPrice(0);
    setImage(null);
  };

  const validateForm = () => {
    if (!name) {
      toast.error("Product name is required.");
      return false;
    }
    if (!description) {
      toast.error("Product description is required.");
      return false;
    }
    if (quantity <= 0) {
      toast.error("Quantity must be greater than 0.");
      return false;
    }
    if (price <= 0) {
      toast.error("Price must be greater than 0.");
      return false;
    }
    if (!image) {
      toast.error("An image is required.");
      return false;
    }
    return true;
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const validTypes = ["image/jpeg", "image/jpg", "image/png"];
      if (validTypes.includes(file.type)) {
        setImage(file);
      } else {
        toast.error("Invalid file type. Only JPEG, JPG, and PNG are allowed.");
      }
    }
  };

  const handleDeleteImage = () => {
    setImage(null);
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    const product = {
      name,
      description,
      quantity,
      price,
      image: URL.createObjectURL(image),
    };

    if (isEditing) {
      setProducts((prev) =>
        prev.map((p) => (p.id === currentProduct.id ? { ...p, ...product } : p))
      );
    } else {
      setProducts((prev) => [
        ...prev,
        { ...product, id: prev.length + 1 },
      ]);
    }

    toast.success("Product saved successfully!");
    setIsModalOpen(false);
    resetForm();
  };

  return (
    <div className="mt-14 ml-96 pl-24">
      <ToastContainer />
      <div className="ml-12 flex justify-between">
        <h1 className="text-5xl font-bold">Inventory</h1>
        <button
          className="bg-[#d5432d] text-white p-2 rounded cursor-pointer hover:bg-[#2b3491] mr-8"
          onClick={handleAddProduct}
        >
          Add Product
        </button>
      </div>
      <div className="ml-12 grid-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image || "https://via.placeholder.com/150"}
              alt={product.name}
              className="product-image"
            />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <div className="product-actions space-x-4">
              <button
                className="bg-yellow-500 text-white p-2 rounded cursor-pointer hover:bg-yellow-700"
                onClick={() => handleEditProduct(product)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white p-2 rounded cursor-pointer hover:bg-red-700"
                onClick={() => handleDeleteProduct(product.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2 className="text-2xl font-bold">
              {isEditing ? "Edit Product" : "Add Product"}
            </h2>
            <input
              type="text"
              value={name}
              placeholder="Product Name"
              onChange={(e) => setName(e.target.value)}
              className="input-title"
            />
            <h2 className="text-2xl font-bold">Description</h2>
            <textarea
              value={description}
              placeholder="Product Description"
              onChange={(e) => setDescription(e.target.value)}
              className="textarea-description"
            ></textarea>
            <h2 className="text-2xl font-bold">Quantity</h2>
            <input
              type="number"
              value={quantity}
              placeholder="Quantity"
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="input-title"
            />
            <h2 className="text-2xl font-bold">Price</h2>
            <input
              type="number"
              value={price}
              placeholder="Price"
              onChange={(e) => setPrice(Number(e.target.value))}
              className="input-title"
            />
            <h2 className="text-2xl font-bold">Image</h2>
            <div className="upload-image-container">
              {image ? (
                <div className="flex space-x-4">
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Preview"
                    className="preview-image"
                  />
                  <button
                    className="delete-button"
                    onClick={handleDeleteImage}
                  >
                    X
                  </button>
                </div>
              ) : (
                <input
                  type="file"
                  accept="image/jpeg, image/jpg, image/png"
                  onChange={handleImageUpload}
                />
              )}
            </div>
            <div className="action-buttons">
              <button
                className="cancel-button"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="continue-button"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inventory;
