// server.js

import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import 'dotenv/config';

const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: [
      "https://red-bite.vercel.app",
      "https://red-bite-admin.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "token"], 
    credentials: true
  })
);



// DB connection
connectDB();

// Routes
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("✅ API is Working — Render Deployment Successful!");
});

// --- 🔥 START SERVER (Render needs this) ---
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
