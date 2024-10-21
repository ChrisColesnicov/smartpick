const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const phonesRouter = require("./phones/router");
const usersRouter = require("./users/router");

router.use("/phones", phonesRouter);
router.use("/users", usersRouter);

/* ************************************************************************* */

module.exports = router;
