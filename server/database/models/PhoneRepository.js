const AbstractRepository = require("./AbstractRepository");

class PhoneRepository extends AbstractRepository {
  constructor() {
    super({ table: "phone" });
  }

  async readall() {
    const [rows] = await this.database.query(`select * from ${this.table}`);
    return rows;
  }
}

module.exports = PhoneRepository;
