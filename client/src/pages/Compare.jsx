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
              <p>Release year : {phone.release_year}</p>
              <p>Price at release : {phone.price}€</p>
            </div>
            <div className="phone-details-screen">
              <p>{phone.screen_type_name}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
