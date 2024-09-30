const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const phonesRouter = require("./phones/router");

router.use("/phones", phonesRouter);

/* ************************************************************************* */

module.exports = router;
