import { useContext, useEffect, useState } from "react";
import CompareContext from "../contexts/CompareContext";
import { getPhonesById } from "../services/phoneRequests";

export default function Compare() {
  const [phones, setPhones] = useState([]);
  const { compared } = useContext(CompareContext);

  useEffect(() => {
    const fetchPhones = async () => {
      try {
        const phonesData = await getPhonesById(compared);
        setPhones(phonesData);
        console.info(phonesData);
      } catch (error) {
        console.error(error);
        // toast error
      }
    };

    if (compared.length > 0) {
      fetchPhones();
    }
  }, [compared]);

  console.info(phones);
  return (
    <section>
      <h1>Phones comparison</h1>
    </section>
  );
}
