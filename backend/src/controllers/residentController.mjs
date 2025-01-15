import pool from "../config/db.mjs";

export const getVoucherBalance = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT balance FROM vouchers WHERE user_id = ?", [req.user.uid]);
    res.status(200).json(result[0]);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch voucher balance" });
  }
};

export const getTransactionHistory = async (req, res) => {
  try {
    const [transactions] = await pool.query("SELECT * FROM product_requests WHERE user_id = ?", [req.user.uid]);
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch transaction history" });
  }
};

export const requestProduct = async (req, res) => {
  const { product_id, quantity } = req.body;

  try {
    const [voucherResult] = await pool.query("SELECT balance FROM vouchers WHERE user_id = ?", [req.user.uid]);
    const currentBalance = voucherResult[0]?.balance;

    if (!currentBalance || currentBalance < quantity) {
      return res.status(400).json({ error: "Insufficient voucher balance" });
    }

    await pool.query(
      "INSERT INTO product_requests (user_id, product_id, quantity, status) VALUES (?, ?, ?, 'pending')",
      [req.user.uid, product_id, quantity]
    );

    await pool.query(
      "UPDATE vouchers SET stock = stock - ? WHERE id = ?", 
      [quantity, product_id]
    );

    await pool.query(
      "UPDATE vouchers SET balance = balance - ? WHERE user_id = ?",
      [quantity, req.user.uid]
    );

    res.status(200).json({ message: "Request submitted successfully" });
  } catch (error) {
    res.status(500).json({ error: `Failed to request product: ${error.message}` });
  }
};
