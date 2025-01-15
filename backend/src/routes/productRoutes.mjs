import express from "express";
import { authenticateToken, authorizeAdmin } from "../middlewares/authMiddleware.mjs";
import {
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
} from "../services/productService.mjs";

const router = express.Router();

// admin: create product (protected)
router.post("/", authenticateToken, authorizeAdmin, async (req, res) => {
  const { name, description, price, stock } = req.body;
  try {
    const productId = await createProduct(name, description, price, stock);
    res.status(201).json({ message: "Product created", productId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// admin: update product (protected)
router.put("/:id", authenticateToken, authorizeAdmin, async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  try {
    await updateProduct(id, updates);
    res.status(200).json({ message: "Product updated" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// admin: delete product (protected)
router.delete("/:id", authenticateToken, authorizeAdmin, async (req, res) => {
  const { id } = req.params;
  try {
    await deleteProduct(id);
    res.status(200).json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// all users: retrieve all products
router.get("/", authenticateToken, async (req, res) => {
  try {
    const products = await getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// all users: retrieve product by product_id
router.get("/:id", authenticateToken, async (req, res) => {
  const { id } = req.params;
  try {
    const product = await getProductById(id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
