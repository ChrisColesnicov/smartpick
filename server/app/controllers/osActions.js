const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const opSystems = await tables.os.readAll();
    res.json(opSystems);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const os = await tables.os.read(req.params.id);
    if (os == null) {
      res.sendStatus(404);
    } else {
      res.json(os);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { browse, read };
