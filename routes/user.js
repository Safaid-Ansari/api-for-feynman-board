const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { auth } = require("../middlewares/auth");

router.post("/register", userController.signUp);
router.post("/login", userController.login);
router.get("/profile", auth, userController.profile);
router.get("/logout", auth, userController.logout);

module.exports = router;
