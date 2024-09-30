const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const connectivities = await tables.connectivity.readAll();
    res.json(connectivities);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const connectivity = await tables.connectivity.read(req.params.id);
    if (connectivity == null) {
      res.sendStatus(404);
    } else {
      res.json(connectivity);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { browse, read };
