import { React, useState } from "react";
import "../index.css";
import { useNavigate } from "react-router";

const Inventory = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");

  // Step 1: Add title and description
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCancelClick = () => {
    setCurrentStep(0);
    navigate("/admin/inventory");
  };

  const handleContinueAfterTitleAndDescClick = () => {
    if (title === "") {
      setErrorMessage("Please enter the title.");
      return;
    }
    if (description === "") {
      setDescription("n/a");
    }
    console.log(title, description);

    if (title.length > 255) {
      setErrorMessage(
        "The name can be up to 255 characters long. Valid characters include all alphanumeric characters and spaces."
      );
      return;
    }
    if (description.split(" ").length > 120) {
      setErrorMessage("The description exceeds the maximum word count of 120.");
      return;
    }

    setErrorMessage(""); // Clear error message
    setCurrentStep((prevStep) => prevStep + 1); // Proceed to next step
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
            {errorMessage && <p className="error-message">{errorMessage}</p>}
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
