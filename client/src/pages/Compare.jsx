import { useContext, useEffect, useState } from "react";
import CompareContext from "../contexts/CompareContext";
import { getPhonesById } from "../services/phoneRequests";
import CompareCard from "../components/CompareCard";

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
      <h1>Phones comparison</h1>
      <section className="phone-details-container">
        {phones.map((phone) => (
          <div key={phone.phone_id} className="phone-details">
            <CompareCard phone={phone} />
            <div className="phone-details-release">
              <h3>Release</h3>
              <p>{phone.release_year}</p>
              <p>{phone.price}€</p>
            </div>
            <div className="phone-details-screen">
              <h3>Display</h3>
              <p>{phone.screen_size}"</p>
              <p>{phone.screen_type_name}</p>
              <p>{phone.screen_protection_name}</p>
              <p>{phone.brightness_typical} nits</p>
              <p>{phone.brightness_max} nits</p>
              <p>{phone.screen_variable_refresh === 0 ? "No" : "Yes"}</p>
              <p>
                {phone.screen_variable_refresh === 0
                  ? `Fixed ${phone.screen_max_refresh} Hz`
                  : `From ${phone.screen_min_refresh} Hz to ${phone.screen_max_refresh} Hz`}
              </p>
              <div className="phone-details-chip">
                <h3>Processor</h3>
                <p>{phone.chip}</p>
                <p>{phone.ram} Go</p>
              </div>
              <div className="phone-details-battery">
                <h3>Battery</h3>
                <p>{phone.battery_size} mAh</p>
                <p>{phone.battery_recharge_rate} W</p>
                <p>{phone.wireless_charging === 0 ? "No" : "Yes"}</p>
              </div>
              <h3>Camera</h3>
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
                ""
              )}
              <p>{phone.video_record_capacity}</p>
            </div>
            <div className="phone-details-hardware">
              <h3>Hardware</h3>
              <p>{phone.phone_material}</p>
              <p>{phone.height} mm</p>
              <p>{phone.width} mm</p>
              <p>{phone.thickness} mm</p>
              <p>{phone.weight} g</p>
            </div>
            <div className="phone-details-camera">
              <div className="phone-details-connectivity">
                <h3>Connectivity</h3>
                <p>{phone.connectivity_version}</p>
                <p>{phone.bluetooth_version}</p>
                <p>{phone.wifi_version}</p>
              </div>
              <div className="phone-details-system">
                <h3>System & storage</h3>
                <p>{phone.operating_system}</p>
                <p>
                  From {phone.minimum_storage} to {phone.maximum_storage} Gb
                </p>
                <p>{phone.storage_extension_available === 0 ? "No" : "Yes"}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
