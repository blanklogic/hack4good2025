import db from "../config/db.mjs";

export const approveVoucherTask = async (req, res) => {
  const { task_id } = req.body;
  try {
    await db.query("UPDATE vouchers SET status = 'approved' WHERE id = ?", [task_id]);
    res.status(200).json({ message: "Voucher task approved" });
  } catch (err) {
    res.status(500).json({ erorr: "Failed to approve voucher task" });
  }
};

export const generateReport = async (req, res) => {
  try {
    const [report] = await db.query("SELECT * FROM product_requests");
    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ error: "Failed to generate report" });
  }
};
