import { React, useState } from "react";
import "../index.css";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";

const Inventory = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  // Step 1: Add title and description
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCancelClick = () => {
    setCurrentStep(0);
    navigate("/admin/inventory");
  };

  const handleContinueAfterTitleAndDescClick = () => {
    if (title === "") {
      toast.error("Please enter the title.");
      return;
    }
    if (description === "") {
      setDescription("n/a");
    }
    console.log(title, description);

    if (title.length > 255) {
      toast.error(
        "The name can be up to 255 characters long. Valid characters include all alphanumeric characters and spaces."
      );
      return;
    }
    if (description.split(" ").length > 120) {
      toast.error("The description exceeds the maximum word count of 120.");
      return;
    }
    setCurrentStep((prevStep) => prevStep + 1); // Proceed to next step
  };

  // Step 2: Add price and stock availability
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [images, setImages] = useState([]);

  const handleUploadImageClick = (inputId) => {
    /** @type {HTMLInputElement} */
    const fileInput = document.getElementById(inputId);

    if (fileInput) {
      fileInput.click();
    } else {
      console.error(`File input with ID "${inputId}" not found.`);
    }
  };

  const handleImageUpload = (e) => {
    if (!e.target.files) return; // Early exit if no files are selected

    const filesArray = Array.from(e.target.files);
    const validFormats = ["image/jpeg", "image/jpg", "application/pdf"];

    const validFiles = filesArray.filter((file) => {
      if (validFormats.includes(file.type)) {
        return true;
      } else {
        toast.error(
          "Invalid format for pictures. Only jpeg, jpg, and pdf files are allowed."
        );
        return false;
      }
    });

    setImages((prev) => [...prev, ...validFiles]);
  };

  const handleDeleteImage = () => {
    setImages([]);
  };

  const handleContinueAfterOtherDetailsClick = () => {
    if (!price || !stock || images.length === 0) {
      toast.error("Please enter all fields.");
      return;
    } else {
      console.log(price, stock, images);
      setCurrentStep((prevStep) => prevStep + 1); // Proceed to next step
    }
  };

  // Step 3: Summary and Submit

  const handleSubmitButtonClick = () => {
    console.log("Form submitted");
    toast.success("Product added successfully!");
    setCurrentStep(0);
    navigate("/admin/inventory");
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0: // Inventory page
        return (
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
          </div>
        );
      case 1: // Title and Desc
        return (
          <div className="add-product-container">
            <ToastContainer />
            <h2 className="text-5xl font-bold text-white mb-8">
              Add a Product
            </h2>
            <input
              type="text"
              placeholder="Input a title"
              className="input-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Write a Description"
              className="textarea-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <div className="action-buttons">
              <button className="cancel-button" onClick={handleCancelClick}>
                Cancel
              </button>
              <button
                className="continue-button"
                onClick={handleContinueAfterTitleAndDescClick}
              >
                Continue
              </button>
            </div>
          </div>
        );
      case 2: // Other details
        return (
          <div className="add-product-container">
            <ToastContainer />
            <h2 className="text-5xl font-bold text-white mb-8">
              Other details
            </h2>
            <input
              type="text"
              placeholder="Input price"
              className="input-title"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <input
              type="text"
              placeholder="Input stock availability"
              className="input-title"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
            <div className="upload-image-container">
              {images.length > 0 && (
                <div className="image-preview-wrapper">
                  <img
                    src={URL.createObjectURL(images[0])}
                    alt={`preview-${images[0].name}`}
                    className="preview-image"
                  />
                  <button
                    className="delete-button"
                    onClick={() => handleDeleteImage()}
                  >
                    x
                  </button>
                </div>
              )}
              {images.length === 0 && (
                <div className="upload-section">
                  <button
                    className="upload-button"
                    onClick={() => handleUploadImageClick("item-images-input")}
                  >
                    + Upload Image
                  </button>
                  <input
                    type="file"
                    id="item-images-input"
                    accept=".jpg,.jpeg,.pdf"
                    multiple
                    onChange={handleImageUpload}
                    className="hidden-input"
                  />
                </div>
              )}
            </div>
            <div className="action-buttons">
              <button className="cancel-button" onClick={handleCancelClick}>
                Cancel
              </button>
              <button
                className="continue-button"
                onClick={handleContinueAfterOtherDetailsClick}
              >
                Continue
              </button>
            </div>
          </div>
        );
      case 3: // Summary and Submit
        return (
          <div className="add-product-container">
            <ToastContainer />
            <h2 className="text-5xl font-bold text-white mb-8">Summary</h2>
            <div className="summary-container">
              <h3>{title}</h3>
              <p>{description}</p>
              <p>Price: {price}</p>
              <p>Stock: {stock}</p>
              <img
                src={URL.createObjectURL(images[0])}
                alt={`preview-${images[0].name}`}
                className="preview-image"
              />
            </div>
            <div className="action-buttons">
              <button className="cancel-button" onClick={handleCancelClick}>
                Cancel
              </button>
              <button
                className="continue-button"
                onClick={handleSubmitButtonClick}
              >
                Submit
              </button>
            </div>
          </div>
        );
      default:
        return <div>Error 404</div>;
    }
  };

  return (
    <div className="mt-14 ml-96 pl-24">
      <div className="ml-12">
        <div className="flex justify-between">
          <h1 className="text-5xl font-bold">Inventory</h1>
          <button
            className="bg-red-600 text-white p-2 rounded cursor-pointer hover:bg-[#2b3491] mr-8"
            onClick={() => setCurrentStep(1)}
          >
            Add Product
          </button>
        </div>
        {renderStep()}
      </div>
    </div>
  );
};

export default Inventory;
