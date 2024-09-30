const express = require("express");

const router = express.Router();

const { browse } = require("../../../controllers/phoneActions");

router.get("/", browse);

module.exports = router;
