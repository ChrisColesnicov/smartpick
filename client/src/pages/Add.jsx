import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TextInput from "../components/TextInput";
import SelectInput from "../components/SelectInput";
import addPhone from "../services/phoneServices";

export default function Add() {
  const [
    connectOptions,
    screenOptions,
    coverOptions,
    osOptions,
    wifiOptions,
    bluetoothOptions,
    brandOptions,
  ] = useLoaderData();
  const genericOptions = [
    { id: 0, name: "No" },
    { id: 1, name: "Yes" },
  ];

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

  const fields = [
    {
      type: "select",
      name: "brand_id",
      label: "Brand",
      options: brandOptions,
      class: "brand-input",
    },
    {
      type: "text",
      data: "text",
      name: "model",
      label: "Model",
      comment: "Enter model name",
      class: "model-input",
    },
    {
      type: "text",
      data: "text",
      name: "picture",
      label: "Picture",
      comment: "Enter a link for a front/back picture",
      class: "picture-input",
    },
    {
      type: "text",
      data: "number",
      name: "release_year",
      label: "Release Year",
      comment: "Enter the release year",
      class: "release-year-input",
    },
    {
      type: "text",
      data: "number",
      name: "price",
      label: "Price",
      comment: "Enter price at release",
      class: "price-input",
    },
    {
      type: "text",
      data: "text",
      name: "screen_size",
      label: "Size (in inches)",
      comment: "Enter screen size",
      class: "screen-input",
    },
    {
      type: "select",
      name: "screen_type_id",
      label: "Screen type",
      options: screenOptions,
      class: "screen-input",
    },
    {
      type: "select",
      name: "screen_protection_type_id",
      label: "Protection type",
      options: coverOptions,
      class: "screen-input",
    },
    {
      type: "text",
      data: "number",
      name: "brightness_typical",
      label: "Typical Brightness (nits)",
      comment: "Enter typical brightness",
      class: "brightness-input",
    },
    {
      type: "text",
      data: "number",
      name: "brightness_max",
      label: "Max Brightness (nits)",
      comment: "Enter max brightness",
      class: "brightness-input",
    },
    {
      type: "select",
      name: "screen_variable_refresh",
      label: "Variable refresh",
      options: genericOptions,
      class: "refresh-input",
    },
    {
      type: "text",
      data: "number",
      name: "screen_min_refresh",
      label: "Minimum refresh (Hz)",
      comment: "Enter minimum refresh rate",
      class: "refresh-input",
    },
    {
      type: "text",
      data: "number",
      name: "screen_max_refresh",
      label: "Maximum refresh (Hz)",
      comment: "Enter maximum refresh rate",
      class: "refresh-input",
    },
    {
      type: "text",
      data: "text",
      name: "chip",
      label: "Chip name",
      comment: "Enter processor name and model",
      class: "chip-input",
    },
    {
      type: "text",
      data: "number",
      name: "ram",
      label: "RAM amount (Go)",
      comment: "Enter RAM amount",
      class: "chip-input",
    },
    {
      type: "text",
      data: "number",
      name: "battery_size",
      label: "Battery size (mAh)",
      comment: "Enter battery size",
      class: "battery-input",
    },
    {
      type: "text",
      data: "number",
      name: "battery_recharge_rate",
      label: "Charging power (W)",
      comment: "Enter max charging power",
      class: "battery-input",
    },
    {
      type: "select",
      name: "wireless_charging",
      label: "Wireless charging",
      options: genericOptions,
      class: "battery-input",
    },
    {
      type: "text",
      data: "number",
      name: "camera_number",
      label: "Number of Cameras (back only)",
      comment: "Enter the number of cameras",
      class: "camera-input",
    },
    {
      type: "text",
      data: "number",
      name: "wide_angle_Mpx",
      label: "Mpx for wide camera",
      comment: "Enter the number of Mpx",
      class: "camera-input",
    },
    {
      type: "text",
      data: "text",
      name: "wide_angle_focus",
      label: "Focus for wide camera",
      comment: "Enter the focus",
      class: "camera-input",
    },
    {
      type: "text",
      data: "number",
      name: "ultrawide_angle_Mpx",
      label: "Mpx for ultrawide camera",
      comment: "Enter the number of Mpx",
      class: "camera-input",
    },
    {
      type: "text",
      data: "text",
      name: "ultrawide_angle_focus",
      label: "Focus for ultrawide camera",
      comment: "Enter the focus",
      class: "camera-input",
    },
    {
      type: "text",
      data: "number",
      name: "other_Mpx",
      label: "Mpx for other camera (if any)",
      comment: "Enter the number of Mpx (leave empty if none)",
      class: "camera-input",
    },
    {
      type: "text",
      data: "text",
      name: "other_focus",
      label: "Focus for other camera (if any)",
      comment: "Enter the focus (leave empty if none)",
      class: "camera-input",
    },
    {
      type: "text",
      data: "text",
      name: "video_record_capacity",
      label: "Best record capacity for videos",
      comment: "Enter the max resolution and FPS",
      class: "camera-input",
    },
    {
      type: "text",
      data: "number",
      name: "height",
      label: "Height (mm)",
      comment: "Enter the height",
      class: "hardware-input",
    },
    {
      type: "text",
      data: "number",
      name: "width",
      label: "Width (mm)",
      comment: "Enter the width",
      class: "hardware-input",
    },
    {
      type: "text",
      data: "number",
      name: "thickness",
      label: "Thickness (mm)",
      comment: "Enter the thickness",
      class: "hardware-input",
    },
    {
      type: "text",
      data: "number",
      name: "weight",
      label: "Weight (g)",
      comment: "Enter the weight",
      class: "hardware-input",
    },
    {
      type: "text",
      data: "text",
      name: "phone_material",
      label: "Phone material (main)",
      comment: "Enter the material",
      class: "hardware-input",
    },
    {
      type: "select",
      name: "bluetooth_id",
      label: "Bluetooth versions",
      options: bluetoothOptions,
      class: "bluetooth-input",
    },
    {
      type: "select",
      name: "wifi_id",
      label: "Wifi versions",
      options: wifiOptions,
      class: "wifi-input",
    },
    {
      type: "select",
      name: "connectivity_id",
      label: "Connectivity",
      options: connectOptions,
      class: "network-input",
    },
    {
      type: "select",
      name: "system_type_id",
      label: "Operating System",
      options: osOptions,
      class: "os-input",
    },
    {
      type: "text",
      data: "number",
      name: "minimum_storage",
      label: "Minimum storage (Gb)",
      comment: "Enter the minimum storage available",
      class: "storage-input",
    },
    {
      type: "text",
      data: "number",
      name: "maximum_storage",
      label: "Maximum storage (Gb)",
      comment: "Enter the maximum storage available",
      class: "storage-input",
    },
    {
      type: "select",
      name: "storage_extension_available",
      label: "Storage extension",
      options: genericOptions,
      class: "storage-input",
    },
  ];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await addPhone(formData);
      if (response) {
        // toast succès
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="input-form">
      {fields.map((field) => {
        if (field.type === "text") {
          return (
            <TextInput
              key={field.name}
              name={field.name}
              data={field.data}
              label={field.label}
              value={formData[field.name]}
              onChange={handleInputChange}
              comment={field.comment}
              classname={field.class}
            />
          );
        }
        if (field.type === "select") {
          return (
            <SelectInput
              key={field.name}
              name={field.name}
              label={field.label}
              value={formData[field.name]}
              onChange={handleInputChange}
              options={field.options}
              classname={field.class}
            />
          );
        }
        return null;
      })}

      <button type="submit">Submit</button>
    </form>
  );
}
