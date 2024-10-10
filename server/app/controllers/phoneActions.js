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

const edit = async (req, res, next) => {
  const phone = req.body;
  try {
    const result = await tables.phone.update(phone);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  const phone = req.body;
  phone.admin_id = 1;
  try {
    const result = await tables.phone.create(phone);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
    next(error);
  }
};

module.exports = { browse, read, add, edit };
