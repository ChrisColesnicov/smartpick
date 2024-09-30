const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const phones = await tables.phone.readAll();
    res.json(phones);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const phone = await tables.phone.read(req.params.id);
    if (phone == null) {
      res.sendStatus(404);
    } else {
      res.json(phone);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { browse, read };
