// Import the repository modules responsible for handling data operations on the tables
const PhoneRepository = require("./models/PhoneRepository");
const BrandRepository = require("./models/BrandRepository");
const WifiRepository = require("./models/WifiRepository");
const OsRepository = require("./models/OsRepository");
const BluetoothRepository = require("./models/BluetoothRepository");
const CoverRepository = require("./models/CoverRepository");
const ConnectivityRepository = require("./models/ConnectivityRepository");
const ScreenRepository = require("./models/ScreenRepository");

// Create an empty object to hold data repositories for different tables
const tables = {};

/* ************************************************************************* */
// Register data repositories for tables
/* ************************************************************************* */

// Register each repository as data access point for its table
tables.phone = new PhoneRepository();
tables.brand = new BrandRepository();
tables.wifi = new WifiRepository();
tables.os = new OsRepository();
tables.bluetooth = new BluetoothRepository();
tables.cover = new CoverRepository();
tables.connectivity = new ConnectivityRepository();
tables.screen = new ScreenRepository();

/* ************************************************************************* */

// Use a Proxy to customize error messages when trying to access a non-existing table

// Export the Proxy instance with custom error handling
module.exports = new Proxy(tables, {
  get(obj, prop) {
    // Check if the property (table) exists in the tables object
    if (prop in obj) return obj[prop];

    // If the property (table) does not exist, throw a ReferenceError with a custom error message
    throw new ReferenceError(
      `tables.${prop} is not defined. Did you register it in ${__filename}?`
    );
  },
});
