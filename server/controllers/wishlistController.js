const Wishlist = require("../models/Wishlist");

exports.getWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({ user: req.user.id }).populate("items");
    res.json(wishlist || { items: [] });
  } catch (error) {
    res.status(500).json({ message: "Error fetching wishlist", error: error.message });
  }
};

exports.addToWishlist = async (req, res) => {
  try {
    const { productId } = req.body;

    let wishlist = await Wishlist.findOne({ user: req.user.id });
    if (!wishlist) {
      wishlist = new Wishlist({ user: req.user.id, items: [] });
    }

    if (!wishlist.items.includes(productId)) {
      wishlist.items.push(productId);
    }

    await wishlist.save();
    res.json(wishlist);
  } catch (error) {
    res.status(500).json({ message: "Error adding to wishlist", error: error.message });
  }
};

exports.removeFromWishlist = async (req, res) => {
  try {
    const { productId } = req.body;

    const wishlist = await Wishlist.findOne({ user: req.user.id });
    if (!wishlist) return res.status(404).json({ message: "Wishlist not found" });

    wishlist.items = wishlist.items.filter((id) => id.toString() !== productId);
    await wishlist.save();

    res.json(wishlist);
  } catch (error) {
    res.status(500).json({ message: "Error removing from wishlist", error: error.message });
  }
};
