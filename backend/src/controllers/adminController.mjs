import pool from "../config/db.mjs";

export const approveVoucherTask = async (req, res) => {
  const { task_id } = req.body;
  try {
    await pool.query(
      "UPDATE product_requests SET status = 'approved' WHERE id = ?",
      [task_id]
    );
    res.status(200).json({ message: "Voucher task approved" });
  } catch (err) {
    res.status(500).json({ error: "Failed to approve voucher task" });
  }
};

export const rejectVoucherTask = async (req, res) => {
  const { task_id } = req.body;

  try {
    const [requestResult] = await pool.query(
      "SELECT user_id, product_id, quantity FROM product_requests WHERE id = ?",
      [task_id]
    );
    const { user_id, product_id, quantity } = requestResult[0];
    const [productInfo] = await pool.query(
      "SELECT price FROM product_inventory WHERE id = ?",
      [product_id]
    );
    const price = productInfo[0]?.price * quantity;

    await pool.query(
      "UPDATE vouchers SET balance = balance + ? WHERE user_id = ?",
      [price, user_id]
    );

    await pool.query(
      "UPDATE product_inventory SET stock = stock + ? WHERE id = ?",
      [quantity, product_id]
    );

    await pool.query(
      "UPDATE product_requests SET status = 'rejected' WHERE id = ?",
      [task_id]
    );

    res
      .status(200)
      .json({
        message:
          "Voucher task succesfully rejected and stock count restored to normal",
      });
  } catch (error) {
    res.status(500).json({ error: "Failed to reject voucher task" });
  }
};
export const generateReport = async (req, res) => {
  try {
    const [productRequests] = await pool.query(
      "SELECT * FROM product_requests"
    );

    const [productInventory] = await pool.query(
      "SELECT * FROM product_inventory"
    );

    res.status(200).json({
      productRequests,
      productInventory,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to generate report" });
  }
};
