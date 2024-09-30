const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const wifis = await tables.wifi.readAll();
    res.json(wifis);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const wifi = await tables.wifi.read(req.params.id);
    if (wifi == null) {
      res.sendStatus(404);
    } else {
      res.json(wifi);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { browse, read };
