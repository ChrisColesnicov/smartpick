const express = require("express");

const router = express.Router();

// All controllers go here

const adminActions = require("../../../controllers/adminActions");

// All admin related routes go here

router.get("/", adminActions.browse);

module.exports = router;