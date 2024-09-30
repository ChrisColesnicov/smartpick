const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const brands = await tables.brand.readAll();
    res.json(brands);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const brand = await tables.brand.read(req.params.id);
    if (brand == null) {
      res.sendStatus(404);
    } else {
      res.json(brand);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { browse, read };
