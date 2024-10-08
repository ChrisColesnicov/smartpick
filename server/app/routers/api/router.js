const express = require("express");

const router = express.Router();

// Import And Use Routers Here

const phonesRouter = require("./phones/router");
const adminsRouter = require("./admin/router");

// All base routes go here

router.use("/phones", phonesRouter);
router.use("/admin", adminsRouter);

module.exports = router;
