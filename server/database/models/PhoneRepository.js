const AbstractRepository = require("./AbstractRepository");

class PhoneRepository extends AbstractRepository {
  constructor() {
    super({ table: "phone" });
  }

  async create(phone) {
    const [rows] = await this.database.query(
      `INSERT INTO ${this.table} (picture, brand_id, model, chip, ram, price, release_year, screen_size, screen_type_id, screen_variable_refresh, screen_min_refresh, screen_max_refresh, screen_protection_type_id, brightness_typical, brightness_max, battery_size, battery_recharge_rate, wireless_charging, camera_number, wide_angle_Mpx, wide_angle_focus, ultrawide_angle_Mpx, ultrawide_angle_focus, other_Mpx, other_focus, video_record_capacity, height, width, thickness, weight, phone_material, bluetooth_id, wifi_id, connectivity_id, system_type_id, minimum_storage, maximum_storage, storage_extension_available, admin_id ) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? , ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        phone.picture,
        phone.brand_id,
        phone.model,
        phone.chip,
        phone.ram,
        phone.price,
        phone.release_year,
        phone.screen_size,
        phone.screen_type_id,
        phone.screen_variable_refresh,
        phone.screen_min_refresh,
        phone.screen_max_refresh,
        phone.screen_protection_type_id,
        phone.brightness_typical,
        phone.brightness_max,
        phone.battery_size,
        phone.battery_recharge_rate,
        phone.wireless_charging,
        phone.camera_number,
        phone.wide_angle_Mpx,
        phone.wide_angle_focus,
        phone.ultrawide_angle_Mpx,
        phone.ultrawide_angle_focus,
        phone.other_Mpx,
        phone.other_focus,
        phone.video_record_capacity,
        phone.height,
        phone.width,
        phone.thickness,
        phone.weight,
        phone.phone_material,
        phone.bluetooth_id,
        phone.wifi_id,
        phone.connectivity_id,
        phone.system_type_id,
        phone.minimum_storage,
        phone.maximum_storage,
        phone.storage_extension_available,
        phone.admin_id,
      ]
    );
    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT 
        p.id AS phone_id,
        p.picture,
        b.name AS brand_name,
        p.model,
        p.chip,
        p.ram,
        p.price,
        p.release_year,
        p.screen_size,
        st.name AS screen_type_name,
        p.screen_variable_refresh,
        p.screen_min_refresh,
        p.screen_max_refresh,
        spt.name AS screen_protection_name,
        p.brightness_typical,
        p.brightness_max,
        p.battery_size,
        p.battery_recharge_rate,
        p.wireless_charging,
        p.camera_number,
        p.wide_angle_Mpx,
        p.wide_angle_focus,
        p.ultrawide_angle_Mpx,
        p.ultrawide_angle_focus,
        p.other_Mpx,
        p.other_focus,
        p.video_record_capacity,
        p.height,
        p.width,
        p.thickness,
        p.weight,
        p.phone_material,
        bl.name AS bluetooth_version,
        wifi.name AS wifi_version,
        connectivity.name AS connectivity_version,
        sys.name AS operating_system,
        p.minimum_storage,
        p.maximum_storage,
        p.storage_extension_available,
        p.admin_id
      FROM
        ${this.table} AS p
      JOIN
        brand AS b ON p.brand_id=b.id
      JOIN
        screen_type AS st ON p.screen_type_id=st.id
      JOIN
        screen_protection_type AS spt ON p.screen_protection_type_id=spt.id
      JOIN
        bluetooth AS bl ON p.bluetooth_id=bl.id
      JOIN
        wifi ON p.wifi_id=wifi.id
      JOIN
        connectivity ON p.connectivity_id=connectivity.id
      JOIN
        system_type AS sys ON p.system_type_id=sys.id
      WHERE
        p.id = ?`,
      [id]
    );
    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`
      SELECT 
        p.id AS phone_id,
        p.picture,
        b.name AS brand_name,
        p.model,
        p.chip,
        p.ram,
        p.price,
        p.release_year,
        p.screen_size,
        st.name AS screen_type_name,
        p.screen_variable_refresh,
        p.screen_min_refresh,
        p.screen_max_refresh,
        spt.name AS screen_protection_name,
        p.brightness_typical,
        p.brightness_max,
        p.battery_size,
        p.battery_recharge_rate,
        p.wireless_charging,
        p.camera_number,
        p.wide_angle_Mpx,
        p.wide_angle_focus,
        p.ultrawide_angle_Mpx,
        p.ultrawide_angle_focus,
        p.other_Mpx,
        p.other_focus,
        p.video_record_capacity,
        p.height,
        p.width,
        p.thickness,
        p.weight,
        p.phone_material,
        bl.name AS bluetooth_version,
        wifi.name AS wifi_version,
        connectivity.name AS connectivity_version,
        sys.name AS Operating_system,
        p.minimum_storage,
        p.maximum_storage,
        p.storage_extension_available,
        p.admin_id
      FROM
        ${this.table} AS p
      JOIN
        brand AS b ON p.brand_id=b.id
      JOIN
        screen_type AS st ON p.screen_type_id=st.id
      JOIN
        screen_protection_type AS spt ON p.screen_protection_type_id=spt.id
      JOIN
        bluetooth AS bl ON p.bluetooth_id=bl.id
      JOIN
        wifi ON p.wifi_id=wifi.id
      JOIN
        connectivity ON p.connectivity_id=connectivity.id
      JOIN
        system_type AS sys ON p.system_type_id=sys.id
    `);
    return rows;
  }

  async update(phone) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} set picture = ?, brand_id = ?, model = ?, chip = ?, ram = ?, price =?, release_year = ?, screen_size = ?, screen_type_id = ?, screen_variable_refresh = ?, screen_min_refresh = ?, screen_max_refresh = ?, screen_protection_type_id = ?, brightness_typical = ?, brightness_max = ?, battery_size = ?, battery_recharge_rate = ?, wireless_charging = ?, camera_number = ?, wide_angle_Mpx = ?, wide_angle_focus = ?, ultrawide_angle_Mpx = ?, ultrawide_angle_focus = ?, other_Mpx = ?, other_focus = ?, video_record_capacity = ?, height = ?, width = ?, thickness = ?, weight = ?, phone_material = ?, bluetooth_id = ?, wifi_id = ?, connectivity_id = ?, system_type_id = ?, minimum_storage = ?, maximum_storage = ?, storage_extension_available = ?, admin_id = ? where id = ?`,
      [
        phone.picture,
        phone.brand_id,
        phone.model,
        phone.chip,
        phone.ram,
        phone.price,
        phone.release_year,
        phone.screen_size,
        phone.screen_type_id,
        phone.screen_variable_refresh,
        phone.screen_min_refresh,
        phone.screen_max_refresh,
        phone.screen_protection_type_id,
        phone.brightness_typical,
        phone.brightness_max,
        phone.battery_size,
        phone.battery_recharge_rate,
        phone.wireless_charging,
        phone.camera_number,
        phone.wide_angle_Mpx,
        phone.wide_angle_focus,
        phone.ultrawide_angle_Mpx,
        phone.ultrawide_angle_focus,
        phone.other_Mpx,
        phone.other_focus,
        phone.video_record_capacity,
        phone.height,
        phone.width,
        phone.thickness,
        phone.weight,
        phone.phone_material,
        phone.bluetooth_id,
        phone.wifi_id,
        phone.connectivity_id,
        phone.system_type_id,
        phone.minimum_storage,
        phone.maximum_storage,
        phone.storage_extension_available,
        phone.admin_id,
        phone.id
      ]
    );
    return result.affectedRows;
  }
}

module.exports = PhoneRepository;
