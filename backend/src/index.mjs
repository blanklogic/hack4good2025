import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import residentRoutes from "./routes/residentRoutes.mjs";
import adminRoutes from "./routes/adminRoutes.mjs";
import productRoutes from "./routes/productRoutes.mjs";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/residents", residentRoutes);
app.use("/api/admins", adminRoutes);
app.use("/api/admins", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
