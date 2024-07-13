const express = require("express");
const router = express.Router();
const controller = require("./../controller/user.controller")
router.get("/register",controller.register)
router.post("/register",controller.postRegister)

module.exports = router;