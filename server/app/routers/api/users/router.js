const express = require("express");

const router = express.Router();

const userActions = require("../../../controllers/userActions");

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

router.get("/", userActions.browse);
router.get("/", userActions.read);
router.post("/", userActions.add);
router.put("/", userActions.edit);
router.delete("/", userActions.destroy);

module.exports = router;
