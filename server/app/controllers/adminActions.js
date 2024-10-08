const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const admins = await tables.admin.readAll();
    res.json(admins);
} catch (error) {
    next(error);
  }
};

module.exports = { browse };
