const AbstractRepository = require("./AbstractRepository");

class PhoneRepository extends AbstractRepository {
  constructor() {
    super({ table: "phone" });
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
}

module.exports = PhoneRepository;
