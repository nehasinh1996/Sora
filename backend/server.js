const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cartRoutes = require("./routes/cartRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// 🖼️ Serve static images from uploads folder
app.use("/uploads", express.static("uploads"));

app.use("/api/cart", cartRoutes);

mongoose
  .connect("mongodb://127.0.0.1:27017/sora", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

app.listen(8080, () => console.log("Server running on port 8080"));
