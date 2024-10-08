const AbstractRepository = require("./AbstractRepository");

class AdminRepository extends AbstractRepository {
  constructor() {
    super({ table: "admin" });
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * from ${this.table}`);
    return rows;
  }
}

module.exports = AdminRepository;
