const express = require("express");

const router = express.Router();

// All controllers go here

const phoneActions = require("../../../controllers/phoneActions");
const brandActions = require("../../../controllers/brandActions");

// All phone related routes go here

router.get("/brands", brandActions.browse);
router.get("/brands/:id", brandActions.read);

router.get("/", phoneActions.browse);
router.get("/:id", phoneActions.read);
module.exports = router;
