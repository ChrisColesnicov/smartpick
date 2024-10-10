import { useState, useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import PhoneCard from "../components/PhoneCard";
import CompareCard from "../components/CompareCard";
import EmptyCard from "../components/EmptyCard";
import CompareContext from "../contexts/CompareContext";

export default function Phones() {
  const phones = useLoaderData();
  const navigate = useNavigate();
  const [compare, setCompare] = useState([]);
  const { setCompared } = useContext(CompareContext);
  const maxCompare = 3;

  const handleCompare = (id) => {
    if (compare.includes(id)) {
      setCompare((prevCompare) =>
        prevCompare.filter((phoneId) => phoneId !== id)
      );
    } else if (compare.length < maxCompare) {
      setCompare((prevCompare) => [...prevCompare, id]);
    } else {
      // toast info 3 phones déjà sélectionnés
    }
  };

  const handleCompareButton = () => {
    setCompared(compare);
    navigate("/compare");
  };

  return (
    <div>
      <h1 className="main-title">Phones page</h1>
      <div className="phone-list">
        <aside className="compared-phones-list">
          <button type="button" onClick={handleCompareButton}>
            Compare
          </button>
          {phones
            .filter((phone) => compare.includes(phone.phone_id))
            .map((phone) => (
              <CompareCard
                key={phone.phone_id}
                phone={phone}
                className="slide-in"
              />
            ))}
          {compare.length < maxCompare ? <EmptyCard compare={compare} /> : ""}
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
