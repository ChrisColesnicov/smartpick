import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TextInput from "../components/TextInput";
import SelectInput from "../components/SelectInput";

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
    },
    {
      type: "text",
      name: "model",
      label: "Model",
      comment: "Enter model name",
    },
    {
      type: "text",
      name: "picture",
      label: "Picture",
      comment: "Enter a link for a front/back picture",
    },
    {
      type: "text",
      name: "release_year",
      label: "Release Year",
      comment: "Enter the release year",
    },
    {
      type: "text",
      name: "price",
      label: "Price",
      comment: "Enter price at release",
    },
    {
      type: "text",
      name: "screen_size",
      label: "Size (in inches)",
      comment: "Enter screen size",
    },
    {
      type: "select",
      name: "screen_type_id",
      label: "Screen type",
      options: screenOptions,
    },
    {
      type: "select",
      name: "screen_protection_type_id",
      label: "Protection type",
      options: coverOptions,
    },
    {
      type: "text",
      name: "brightness_typical",
      label: "Typical Brightness (nits)",
      comment: "Enter typical brightness",
    },
    {
      type: "text",
      name: "brightness_max",
      label: "Max Brightness (nits)",
      comment: "Enter max brightness",
    },
    {
      type: "select",
      name: "screen_variable_refresh",
      label: "Variable refresh",
      options: genericOptions,
    },
    {
      type: "text",
      name: "screen_min_refresh",
      label: "Minimum refresh (Hz)",
      comment: "Enter minimum refresh rate",
    },
    {
      type: "text",
      name: "screen_max_refresh",
      label: "Maximum refresh (Hz)",
      comment: "Enter maximum refresh rate",
    },
    {
      type: "text",
      name: "chip",
      label: "Chip name",
      comment: "Enter processor name and model",
    },
    {
      type: "text",
      name: "ram",
      label: "RAM amount (Go)",
      comment: "Enter RAM amount",
    },
    {
      type: "text",
      name: "battery_size",
      label: "Battery size (mAh)",
      comment: "Enter battery size",
    },
    {
      type: "text",
      name: "battery_recharge_rate",
      label: "Charging power (W)",
      comment: "Enter max charging power",
    },
    {
      type: "select",
      name: "wireless_charging",
      label: "Wireless charging",
      options: genericOptions,
    },
    {
      type: "text",
      name: "camera_number",
      label: "Number of Cameras (back only)",
      comment: "Enter the number of cameras",
    },
    {
      type: "text",
      name: "wide_angle_Mpx",
      label: "Mpx for wide camera",
      comment: "Enter the number of Mpx",
    },
    {
      type: "text",
      name: "wide_angle_focus",
      label: "Focus for wide camera",
      comment: "Enter the focus",
    },
    {
      type: "text",
      name: "ultrawide_angle_Mpx",
      label: "Mpx for ultrawide camera",
      comment: "Enter the number of Mpx",
    },
    {
      type: "text",
      name: "ultrawide_angle_focus",
      label: "Focus for ultrawide camera",
      comment: "Enter the focus",
    },
    {
      type: "text",
      name: "other_Mpx",
      label: "Mpx for other camera (if any)",
      comment: "Enter the number of Mpx (leave empty if none)",
    },
    {
      type: "text",
      name: "other_focus",
      label: "Focus for other camera (if any)",
      comment: "Enter the focus (leave empty if none)",
    },
    {
      type: "text",
      name: "video_record_capacity",
      label: "Best record capacity for videos",
      comment: "Enter the max resolution and FPS",
    },
    {
      type: "text",
      name: "height",
      label: "Height (mm)",
      comment: "Enter the height",
    },
    {
      type: "text",
      name: "width",
      label: "Width (mm)",
      comment: "Enter the width",
    },
    {
      type: "text",
      name: "thickness",
      label: "Thickness (mm)",
      comment: "Enter the thickness",
    },
    {
      type: "text",
      name: "weight",
      label: "Weight (g)",
      comment: "Enter the weight",
    },
    {
      type: "text",
      name: "phone_material",
      label: "Phone material (main)",
      comment: "Enter the material",
    },
    {
      type: "select",
      name: "bluetooth_id",
      label: "Bluetooth versions",
      options: bluetoothOptions,
    },
    {
      type: "select",
      name: "wifi_id",
      label: "Wifi versions",
      options: wifiOptions,
    },
    {
      type: "select",
      name: "connectivity_id",
      label: "Connectivity",
      options: connectOptions,
    },
    {
      type: "select",
      name: "system_type_id",
      label: "OS",
      options: osOptions,
    },
    {
      type: "text",
      name: "minimum_storage",
      label: "Minimum storage (Gb)",
      comment: "Enter the minimum storage available",
    },
    {
      type: "text",
      name: "maximum_storage",
      label: "Maximum storage (Gb)",
      comment: "Enter the maximum storage available",
    },
    {
      type: "select",
      name: "storage_extension_available",
      label: "Storage extension",
      options: genericOptions,
    },
  ];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form>
      {fields.map((field) => {
        if (field.type === "text") {
          return (
            <TextInput
              key={field.name}
              name={field.name}
              label={field.label}
              value={formData[field.name]}
              onChange={handleInputChange}
              comment={field.comment}
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
            />
          );
        }
        return null;
      })}

      <button type="submit">Soumettre</button>
    </form>
  );
}
