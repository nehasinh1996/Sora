const express = require("express");
const { placeOrder, viewOrder, orderHistory } = require("../controllers/orderController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/place", authMiddleware, placeOrder);
router.get("/view", authMiddleware, viewOrder);
router.get("/history", authMiddleware, orderHistory);

module.exports = router;
