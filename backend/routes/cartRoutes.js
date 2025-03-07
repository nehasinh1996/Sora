const express = require("express");
const Cart = require("../models/Cart");

const router = express.Router();

router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const cart = await Cart.findOne({ userId }).populate("items.productId");

    if (!cart) {
      return res.status(200).json({ items: [] });
    }

    const cartData = cart.items.map((item) => ({
      _id: item.productId._id,
      name: item.productId.name,
      price: item.productId.price,
      image: item.productId.image, // ✅ Image ensure kiya
      quantity: item.quantity,
    }));

    res.status(200).json(cartData);
  } catch (error) {
    res.status(500).json({ error: "Error fetching cart" });
  }
});

module.exports = router;
