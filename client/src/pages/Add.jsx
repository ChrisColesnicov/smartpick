import { useState } from "react";
import TextInput from "../components/TextInput";

export default function Add() {
  const [formData, setFormData] = useState({
    picture: "",
    brand_id: "",
    model: "",
    chip: "",
    ram: "",
    price: "",
    release_year: "",
    screen_size: "",
    screen_type_id: "",
    screen_variable_refresh: "",
    screen_min_refresh: "",
    screen_max_refresh: "",
    screen_protection_type_id: "",
    brightness_typical: "",
    brightness_max: "",
    battery_size: "",
    battery_recharge_rate: "",
    wireless_charging: "",
    camera_number: "",
    wide_angle_Mpx: "",
    wide_angle_focus: "",
    ultrawide_angle_Mpx: "",
    ultrawide_angle_focus: "",
    other_Mpx: "",
    other_focus: "",
    video_record_capacity: "",
    height: "",
    width: "",
    thickness: "",
    weight: "",
    phone_material: "",
    bluetooth_id: "",
    wifi_id: "",
    connectivity_id: "",
    system_type_id: "",
    minimum_storage: "",
    maximum_storage: "",
    storage_extension_available: "",
    admin_id: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section>
      <h1>Add page</h1>

      <div className="add-phone-input">
        <TextInput
          value={formData.picture}
          name="picture"
          onChange={handleInputChange}
          comment="Enter a link for a front/back picture"
        />
      </div>
    </section>
  );
}
