import db from "../config/db.mjs";

export const getVoucherBalance = async (req, res) => {
  try {
    const [result] = await db.query("SELECT balance FROM vouchers WHERE user_id = ?", [req.user.uid]);
    res.status(200).json(result[0]);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch voucher balance" });
  }
};

export const getTransactionHistory = async (req, res) => {
  try {
    const [transactions] = await db.query("SELECT * FROM transactions WHERE user_id = ?", [req.user.uid]);
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch transaction history" });
  }
};

export const requestProduct = async (req, res) => {
  const { product_id, quantity } = req.body;
  try {
    await db.query("INSERT INTO product_requests (user_id, product_id, quantity, status) VALUES (?, ?, ?, 'pending')", [req.user.uid, product_id, quantity]);
    res.status(200).json({ message: "Request submitted successfully" });
  } catch (error) {
    res.status(500).json({ error: `Failed to request for product:${product_id}`});
  }
};
