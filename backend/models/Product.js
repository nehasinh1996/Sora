const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true }, // ✅ Image field ensure karo
  description: { type: String },
  quantity: { type: Number, default: 1 },
});

module.exports = mongoose.model("Product", ProductSchema);
