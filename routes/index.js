const express = require("express");

const router = express.Router();
router.use("/user", require("./user"));

router.use("/feynman", require("./feynmanRoutes"));
module.exports = router;
