import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import PhoneCard from "../components/PhoneCard";
import CompareCard from "../components/CompareCard";
import EmptyCard from "../components/EmptyCard";

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
      <div className="phone-list">
        <aside className="compared-phones-list">
          <button type="button">Compare</button>
          {phones
            .filter((phone) => compare.includes(phone.phone_id))
            .map((phone) => (
              <CompareCard key={phone.phone_id} phone={phone} className="slide-in"/>
            ))}
          {compare.length < 3 ? <EmptyCard compare={compare} /> : ""}
        </aside>
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
    </div>
  );
}
