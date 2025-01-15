import express from "express";
import { authenticateToken } from "../middlewares/authMiddleware.mjs";
import { getVoucherBalance, getTransactionHistory, requestProduct } from "../controllers/residentController.mjs";

const router = express.Router();

router.get("/voucher-balance", authenticateToken, getVoucherBalance);
router.get("/transaction-history", authenticateToken, getTransactionHistory);
router.post("/request-product", authenticateToken, requestProduct);

export default router;
