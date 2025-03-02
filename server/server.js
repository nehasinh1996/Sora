const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db.js");
const authRoutes = require("./routes/authRoutes.js");

// Load environment variables
const dotenv = require("dotenv");
dotenv.config();

// App config
const app = express();
const port = process.env.PORT || 8080;

// Middlewares
app.use(express.json());
app.use(cookieParser());

// CORS setup (Frontend connection ke liye)
app.use(
  cors({
    origin: "http://localhost:5173", // Frontend URL
    credentials: true, // Cookies allow karega
  })
);

// Database connection
connectDB();

// API routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => res.send("All API endpoints are working!"));

// Server listening
app.listen(port, () => console.log(`Server is running on port ${port}!`));
