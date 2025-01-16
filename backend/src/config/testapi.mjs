import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

// Firebase client-side configuration (replace with your Firebase config)
const firebaseConfig = {
// firebase_config......
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Firebase User Credentials (Dummy User)
// const userEmail = "user1@example.com";
// const userPassword = "password123";

// Firebase Admin Credentials (Dummy Admin)
const adminEmail = "admin@example.com";
const adminPassword = "admin123";

// API Endpoint

/**
 *
 * user endpointsssss
 */
// const API_URL = "http://localhost:5000/api/residents/voucher-balance"; // get voucher balance for a user
// const API_URL = "http://localhost:5000/api/admins/products"; // retrive json object of available products
// const API_URL = "http://localhost:5000/api/residents/request-product"; // request for a particular product
// const API_URL = "http://localhost:5000/api/residents/transaction-history"; // request for a user's transaction history

/**
 *
 * admin endpointssss
 */
// const API_URL = "http://localhost:5000/api/admins/approve-voucher" // approve a particular product request
// const API_URL = "http://localhost:5000/api/admins/reject-voucher" // reject a particular product request
// const API_URL = "http://localhost:5000/api/admins/generate-report" // request a json object of product logs and product requests
// const API_URL = "http://localhost:5000/api/admins/products"; // create a product
// const API_URL = `http://localhost:5000/api/admins/products/${product_id}`; // update a product
// const API_URL = `http://localhost:5000/api/admins/products/${product_id}`; // delete a product
// const API_URL = "http://localhost:5000/api/admins/create-user"; // create a new user
// const API_URL = "http://localhost:5000/api/admins/reset-password"; // reset password for user
// const API_URL = `http://localhost:5000/api/admins/delete-user/${firebase_user_uid}`; // delete specific user

const getIdToken = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      adminEmail,
      adminPassword
    ); // change this to user if needed
    const idToken = await userCredential.user.getIdToken();
    return idToken;
  } catch (error) {
    console.error("Error signing in:", error.message);
    throw error;
  }
};

const getVoucherBalance = async () => {
  try {
    // Get the ID Token
    const idToken = await getIdToken();

    // Make the API Call
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${idToken}`, // Send ID Token in Authorization header
      },
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    // Parse and Display the Response
    const data = await response.json();
    console.log("API Response:", data);
  } catch (error) {
    console.error("Error calling backend:", error.message);
  }
};

const requestToken = async (productId, quantity) => {
  try {
    const idToken = await getIdToken(); // Get Firebase ID Token

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${idToken}`,
      },
      body: JSON.stringify({
        product_id: productId,
        quantity: quantity,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to request product: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Product Request:", data);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

const requestTransactionHistory = async () => {
  try {
    const idToken = await getIdToken();

    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${idToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    console.log("API Response:", data);
  } catch (error) {
    console.error("Error calling backend:", error.message);
  }
};

const approveVoucherTask = async (taskId) => {
  try {
    const idToken = await getIdToken(); // Get Firebase ID Token

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${idToken}`,
      },
      body: JSON.stringify({
        task_id: taskId,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to approve voucher task: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Voucher Task Approved:", data);
  } catch (error) {
    console.error("Error approving voucher task:", error.message);
  }
};

const rejectVoucherTask = async (taskId) => {
  try {
    const idToken = await getIdToken(); // Get Firebase ID Token

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${idToken}`,
      },
      body: JSON.stringify({
        task_id: taskId,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to approve voucher task: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Voucher Task Approved:", data);
  } catch (error) {
    console.error("Error approving voucher task:", error.message);
  }
};

const generateReport = async () => {
  try {
    const idToken = await getIdToken(); // Get Firebase ID Token

    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${idToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to generate report: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Generated Report:", data);
  } catch (error) {
    console.error("Error generating report:", error.message);
  }
};

const createProduct = async (name, description, price, stock) => {
  try {
    const idToken = await getIdToken(); // Get Firebase ID Token

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${idToken}`,
      },
      body: JSON.stringify({
        name,
        description,
        price,
        stock,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to create product: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Product Created:", data);
    return data;
  } catch (error) {
    console.error("Error creating product:", error.message);
  }
};

const updateProduct = async (id, updates) => {
  try {
    const idToken = await getIdToken(); // Get Firebase ID Token

    const response = await fetch(API_URL, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${idToken}`,
      },
      body: JSON.stringify(updates),
    });

    if (!response.ok) {
      throw new Error(`Failed to update product: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Product Updated:", data);
    return data;
  } catch (error) {
    console.error("Error updating product:", error.message);
  }
};

const deleteProduct = async (id) => {
  try {
    const idToken = await getIdToken(); // Get Firebase ID Token

    const response = await fetch(API_URL, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${idToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to delete product: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Product Deleted:", data);
    return data;
  } catch (error) {
    console.error("Error deleting product:", error.message);
  }
};

const createUser = async (email, password, displayName) => {
  try {
    const idToken = await getIdToken(); // Get Firebase ID Token

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${idToken}`,
      },
      body: JSON.stringify({
        email,
        password,
        displayName,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to create user: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("User Created:", data);
    return data;
  } catch (error) {
    console.error("Error creating user:", error.message);
  }
};

const resetPassword = async (uid, newPassword) => {
  try {
    const idToken = await getIdToken(); // Get Firebase ID Token

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${idToken}`,
      },
      body: JSON.stringify({
        uid,
        newPasswod: newPassword, // Ensure this matches the backend spelling
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to reset password: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Password Reset:", data);
    return data;
  } catch (error) {
    console.error("Error resetting password:", error.message);
  }
};

const deleteUser = async (uid) => {
  try {
    const idToken = await getIdToken(); // Get Firebase ID Token

    const response = await fetch(API_URL, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${idToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to delete user: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("User Deleted:", data);
    return data;
  } catch (error) {
    console.error("Error deleting user:", error.message);
  }
};

// await callBackend();
// await requestProduct(1, 5);
// await approveVoucherTask(10);
// await rejectVoucherTask(8);
// await generateReport();
// await createProduct("pickles", "greeeeeeeen pickles", 5, 100);
// await updateProduct(6, {
//   name: 'pickle',
//   description: 'yum',
//   price: 8,
//   stock: 200,
// });
// await deleteProduct(6);
// await createUser('ron@email.com', 'ron123', 'ron');
