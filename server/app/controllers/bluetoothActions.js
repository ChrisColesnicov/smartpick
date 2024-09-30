const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const bluetooths = await tables.bluetooth.readAll();
    res.json(bluetooths);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const bluetooth = await tables.bluetooth.read(req.params.id);
    if (bluetooth == null) {
      res.sendStatus(404);
    } else {
      res.json(bluetooth);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { browse, read };
