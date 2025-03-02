const express = require("express");
const { addToCart, removeFromCart, viewCart } = require("../controllers/cartController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/add", authMiddleware, addToCart);
router.post("/remove", authMiddleware, removeFromCart);
router.post("/view", authMiddleware, viewCart);

module.exports = router;
