const express = require("express");
const { route } = require("./web.route");
const router = express.Router();
const controller = require("./../controller/classroom.controller")
const role = require("./../middleware/role");

// check all routes in file
// router.use(role.role_admin);

// check route
router.use("/create",role.role_admin);

router.get("/",controller.get);
router.get("/create",controller.create);
router.post("/create",controller.save);

module.exports = router;