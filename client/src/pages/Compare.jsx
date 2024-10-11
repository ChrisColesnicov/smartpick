import { useContext, useEffect, useState } from "react";
import CompareContext from "../contexts/CompareContext";
import { getPhonesById } from "../services/phoneRequests";
import CompareCard from "../components/CompareCard";

import Screen from "../assets/images/screen.png";
import Chip from "../assets/images/chip.png";
import Camera from "../assets/images/camera.png";
import Battery from "../assets/images/battery.png";
import Hardware from "../assets/images/hardware.png";
import Wifi from "../assets/images/wifi.png";
import Memory from "../assets/images/memory.png";
import Release from "../assets/images/release.png";
import Settings from "../assets/images/settings.png";

export default function Compare() {
  const [phones, setPhones] = useState([]);
  const { compared } = useContext(CompareContext);

  useEffect(() => {
    const fetchPhones = async () => {
      try {
        const phonesData = await getPhonesById(compared);
        setPhones(phonesData);
      } catch (error) {
        console.error(error);
        // toast error
      }
    };

    if (compared.length > 0) {
      fetchPhones();
    }
  }, [compared]);

  return (
    <div>
      <h1 className="compare-title">Compare your selected phones</h1>
      <section className="phone-details-container">
        <div className="phone-details">
          <div className="details-title-container">
            <h3 className="details-title">Topics</h3>
            <img src={Settings} alt="Topics" />
          </div>
          {phones.map((phone) => (
            <CompareCard key={phone.phone_id} phone={phone} />
          ))}
        </div>
        <div className="phone-details">
          <div className="details-title-container">
            <h3 className="details-title">Release</h3>
            <img src={Release} alt="Release" />
          </div>
          <div className="field-name">
            <p>Release year :</p>
            <p>Price at release :</p>
          </div>
          {phones.map((phone) => (
            <div key={phone.phone_id} className="phone-details-box">
              <p>{phone.release_year}</p>
              <p>{phone.price}€</p>
            </div>
          ))}
        </div>
        <div className="phone-details">
          <div className="details-title-container">
            <h3 className="details-title">Display</h3>
            <img src={Screen} alt="Display" />
          </div>
          {phones.map((phone) => (
            <div key={phone.phone_id} className="phone-details-box">
              <p>{phone.screen_size}"</p>
              <p>{phone.screen_type_name}</p>
              <p>{phone.screen_protection_name}</p>
              <p>{phone.brightness_typical} nits (typical)</p>
              <p>{phone.brightness_max} nits (peak)</p>
              <p>{phone.screen_variable_refresh === 0 ? "No" : "Yes"}</p>
              <p>
                {phone.screen_variable_refresh === 0
                  ? `Fixed ${phone.screen_max_refresh} Hz`
                  : `From ${phone.screen_min_refresh} Hz to ${phone.screen_max_refresh} Hz`}
              </p>
            </div>
          ))}
        </div>
        <div className="phone-details">
          <div className="details-title-container">
            <h3 className="details-title">Processor</h3>
            <img src={Chip} alt="Processor" />
          </div>
          {phones.map((phone) => (
            <div key={phone.phone_id} className="phone-details-box">
              <p>{phone.chip}</p>
              <p>{phone.ram} Go</p>
            </div>
          ))}
        </div>
        <div className="phone-details">
          <div className="details-title-container">
            <h3 className="details-title">Battery</h3>
            <img src={Battery} alt="Battery" />
          </div>
          {phones.map((phone) => (
            <div key={phone.phone_id} className="phone-details-box">
              <p>{phone.battery_size} mAh</p>
              <p>{phone.battery_recharge_rate} W</p>
              <p>{phone.wireless_charging === 0 ? "No" : "Yes"}</p>
            </div>
          ))}
        </div>
        <div className="phone-details">
          <div className="details-title-container">
            <h3 className="details-title">Camera</h3>
            <img src={Camera} alt="Camera" />
          </div>
          {phones.map((phone) => (
            <div key={phone.phone_id} className="phone-details-box">
              <p>{phone.camera_number}</p>
              <p>{phone.wide_angle_Mpx} Mpx</p>
              <p>{phone.wide_angle_focus}</p>
              <p>{phone.ultrawide_angle_Mpx} Mpx</p>
              <p>{phone.ultrawide_angle_focus}</p>
              {phone.camera_number > 2 ? (
                <div>
                  <p>{phone.other_Mpx} Mpx</p>
                  <p>{phone.other_focus}</p>
                </div>
              ) : (
                <div>
                  <p>-</p>
                  <p>-</p>
                </div>
              )}
              <p>{phone.video_record_capacity}</p>
            </div>
          ))}
        </div>
        <div className="phone-details">
          <div className="details-title-container">
            <h3 className="details-title">Hardware</h3>
            <img src={Hardware} alt="Hardware" />
          </div>{" "}
          {phones.map((phone) => (
            <div key={phone.phone_id} className="phone-details-box">
              <p>{phone.phone_material}</p>
              <p>{phone.height} mm</p>
              <p>{phone.width} mm</p>
              <p>{phone.thickness} mm</p>
              <p>{phone.weight} g</p>
            </div>
          ))}
        </div>
        <div className="phone-details">
          <div className="details-title-container">
            <h3 className="details-title">Connectivity</h3>
            <img src={Wifi} alt="Connectivity" />
          </div>
          {phones.map((phone) => (
            <div key={phone.phone_id} className="phone-details-box">
              <p>{phone.connectivity_version}</p>
              <p>{phone.bluetooth_version}</p>
              <p>{phone.wifi_version}</p>
            </div>
          ))}
        </div>
        <div className="phone-details">
          <div className="details-title-container">
            <h3 className="details-title">System & storage</h3>
            <img src={Memory} alt="system & storage" />
          </div>
          {phones.map((phone) => (
            <div key={phone.phone_id} className="phone-details-box">
              <p>{phone.operating_system}</p>
              <p>
                From {phone.minimum_storage} to {phone.maximum_storage} Gb
              </p>
              <p>{phone.storage_extension_available === 0 ? "No" : "Yes"}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
