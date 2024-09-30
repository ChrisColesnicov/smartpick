const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");
const phonesRouter = require("./phones/router");

router.use("/items", itemsRouter);
router.use("/phones", phonesRouter);

/* ************************************************************************* */

module.exports = router;
