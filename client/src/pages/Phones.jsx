import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import PhoneCard from "../components/PhoneCard";

export default function Phones() {
  const phones = useLoaderData();
  const [compare, setCompare] = useState([]);

  const handleCompare = (id) => {
    if (compare.includes(id)) {
      setCompare((prevCompare) =>
        prevCompare.filter((phoneId) => phoneId !== id)
      );
    } else if (compare.length < 3) {
      setCompare((prevCompare) => [...prevCompare, id]);
    } else {
      // toast info 3 phones déjà sélectionnés
    }
  };

  console.info(compare);

  return (
    <div>
      <h1 className="main-title">Phones page</h1>
      <section className="phone-card-container">
        {phones.map((phone) => (
          <PhoneCard
            key={phone.phone_id}
            phone={phone}
            compare={compare}
            handleCompare={handleCompare}
          />
        ))}
      </section>
    </div>
  );
}
