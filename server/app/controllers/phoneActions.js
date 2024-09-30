const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const phones = await tables.phone.readall();
    res.json(phones);
  } catch (err) {
    next(err);
  }
};

module.exports = { browse };
