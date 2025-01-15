import express from "express";
import { authenticateToken, authorizeAdmin } from "../middlewares/authMiddleware.mjs";
import { approveVoucherTask, rejectVoucherTask, generateReport } from "../controllers/adminController.mjs";
import { createUser, deleteUser, resetUserPassword } from "../services/userService.mjs";

const router = express.Router();

router.post("/approve-voucher", authenticateToken, authorizeAdmin, approveVoucherTask);
router.post("/reject-voucher", authenticateToken, authorizeAdmin, rejectVoucherTask);
router.get("/generate-report", authenticateToken, authorizeAdmin, generateReport);

router.post('/create-user', authenticateToken, authorizeAdmin, async (req, res) => {
  const { email, password, displayName } = req.body;
  try {
    const userRecord = await createUser(email, password, displayName);
    res.status(201).json({ uid: userRecord.uid });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/reset-password', authenticateToken, authorizeAdmin, async (req, res) => {
  const { uid, newPasswod } = req.body;
  try {
    await resetUserPassword(uid, newPasswod);
    res.status(200).json({ message: 'Password Updated Successfully'});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/delete-user/:uid', authenticateToken, authorizeAdmin, async (req, res) => {
  const { uid } = req.params;
  try {
    await deleteUser(uid);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;

