import db from "../config/db.mjs";

// create new product
export const createProduct = async (name, description, price, stock) => {
  try {
    const [result] = await db.query(
      `INSERT INTO product_inventory (name, description, price, stock) VALUES (?, ?, ?, ?)`,
      [name, description, price, stock]
    );
    return result.insertId;
  } catch (error) {
    throw new Error("Error creating product: " + error.message);
  }
};

// update product
export const updateProduct = async (id, updates) => {
  const { name, description, price, stock } = updates;
  try {
    await db.query(
      `UPDATE product_inventory SET name = ?, description = ?, price = ?, stock = ? WHERE id = ?`,
      [name, description, price, stock, id]
    );
  } catch (error) {
    throw new Error("Error updating product: " + error.message);
  }
};

// delete product
export const deleteProduct = async (id) => {
  try {
    await db.query(`DELETE FROM product_inventory WHERE id = ?`, [id]);
  } catch (error) {
    throw new Error("Error deleting product: " + error.message);
  }
};

// get all product
export const getAllProducts = async () => {
  try {
    const [products] = await db.query(`SELECT * FROM product_inventory`);
    return products;
  } catch (error) {
    throw new Error("Error fetching products: " + error.message);
  }
};

// update product by id
export const getProductById = async (id) => {
  try {
    const [product] = await db.query(`SELECT * FROM product_inventory WHERE id = ?`, [id]);
    return product[0];
  } catch (error) {
    throw new Error("Error fetching product: " + error.message);
  }
};
