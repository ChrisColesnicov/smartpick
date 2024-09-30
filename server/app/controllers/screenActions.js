const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const screens = await tables.screen.readAll();
    res.json(screens);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const screen = await tables.screen.read(req.params.id);
    if (screen == null) {
      res.sendStatus(404);
    } else {
      res.json(screen);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { browse, read };
