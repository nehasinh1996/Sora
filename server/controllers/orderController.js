const Order = require("../models/Order");

exports.placeOrder = async (req, res) => {
  try {
    const { items, totalAmount } = req.body;

    const order = new Order({
      user: req.user.id,
      items,
      totalAmount,
      status: "Pending",
    });

    await order.save();
    res.json({ message: "Order placed successfully", order });
  } catch (error) {
    res.status(500).json({ message: "Order placement failed", error: error.message });
  }
};
