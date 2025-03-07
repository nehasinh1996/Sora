const express = require("express");
const { login, forgotPassword, resetPassword } = require("../controllers/authController");
const { signup } = require("../../client/src/Api/auth");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/forgotpassword", forgotPassword);
router.post("/resetpassword", resetPassword);

module.exports = router;
