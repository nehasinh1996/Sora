const User = require("../models/User");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

// 🔐 JWT Token Generator
const generateToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// ✅ User Login
const login = async (req, res) => {
  try {
    const { emailOrPhone, password } = req.body;
    const user = await User.findOne({
      $or: [{ email: emailOrPhone }, { phone: emailOrPhone }],
    });

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: "Invalid credentials!" });
    }

    const token = generateToken(user);
    res.json({ message: "Login successful!", token, user });
  } catch (err) {
    res.status(500).json({ message: "Server error!", error: err.message });
  }
};

// ✅ Forgot Password (Generate Reset Token)
const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ message: "User not found!" });

    const resetToken = user.generateResetToken();
    await user.save();

    // 🔥 TODO: Email/SMS send logic yahan add kar (Twilio, Nodemailer)
    console.log(`🔵 Password Reset Token: ${resetToken}`);

    res.json({ message: "Reset token generated!", resetToken });
  } catch (err) {
    res.status(500).json({ message: "Server error!", error: err.message });
  }
};

// ✅ Reset Password (Verify Token & Update Password)
const resetPassword = async (req, res) => {
  try {
    const { resetToken, newPassword } = req.body;
    const hashedToken = crypto.createHash("sha256").update(resetToken).digest("hex");

    const user = await User.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) return res.status(400).json({ message: "Invalid or expired token!" });

    user.password = await bcrypt.hash(newPassword, 10);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.json({ message: "Password reset successful!" });
  } catch (err) {
    res.status(500).json({ message: "Server error!", error: err.message });
  }
};

module.exports = { login, forgotPassword, resetPassword };
