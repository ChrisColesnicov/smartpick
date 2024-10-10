const express = require("express");

const router = express.Router();

// All controllers go here

const phoneActions = require("../../../controllers/phoneActions");
const brandActions = require("../../../controllers/brandActions");
const bluetoothActions = require("../../../controllers/bluetoothActions");
const connectivityActions = require("../../../controllers/connectivityActions");
const coverActions = require("../../../controllers/coverActions");
const osActions = require("../../../controllers/osActions");
const screenActions = require("../../../controllers/screenActions");
const wifiActions = require("../../../controllers/wifiActions");

// All phone related routes go here
// Phones specs related routes

router.get("/specs/connect", connectivityActions.browse);
router.get("/specs/connect/:id", connectivityActions.read);

router.get("/specs/screen", screenActions.browse);
router.get("/specs/screen/:id", screenActions.read);

router.get("/specs/cover", coverActions.browse);
router.get("/specs/cover/:id", coverActions.read);

router.get("/specs/os", osActions.browse);
router.get("/specs/os/:id", osActions.read);

router.get("/specs/wifi", wifiActions.browse);
router.get("/specs/wifi/:id", wifiActions.read);

router.get("/specs/bluetooth", bluetoothActions.browse);
router.get("/specs/bluetooth/:id", bluetoothActions.read);

router.get("/specs/brands", brandActions.browse);
router.get("/specs/brands/:id", brandActions.read);

// Generic phone routes

router.get("/", phoneActions.browse);
router.get("/:id", phoneActions.read);
router.post("/", phoneActions.add);
router.put("/", phoneActions.edit);
router.delete("/:id", phoneActions.destroy);

module.exports = router;
