const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const covers = await tables.cover.readAll();
    res.json(covers);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const cover = await tables.cover.read(req.params.id);
    if (cover == null) {
      res.sendStatus(404);
    } else {
      res.json(cover);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { browse, read };
