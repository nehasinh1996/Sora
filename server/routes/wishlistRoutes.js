const express = require("express");
const { addToWishlist, removeFromWishlist, viewWishlist } = require("../controllers/wishlistController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/add", authMiddleware, addToWishlist);
router.post("/remove", authMiddleware, removeFromWishlist);
router.get("/view", authMiddleware, viewWishlist);

module.exports = router;
