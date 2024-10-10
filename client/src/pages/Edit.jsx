import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import EditCard from "../components/EditCard";

export default function Edit() {
  const loadedPhones = useLoaderData();
  const [phones, setPhones] = useState(loadedPhones);

  const handlePhoneDelete = (deletedPhoneId) => {
    setPhones((prevPhones) =>
      prevPhones.filter((phone) => phone.phone_id !== deletedPhoneId)
    );
  };

  return (
    <div>
      <h1>Edit</h1>
      <section className="phone-card-container">
        {phones.map((phone) => (
          <EditCard
            key={phone.phone_id}
            phone={phone}
            onDelete={handlePhoneDelete}
          />
        ))}
      </section>
    </div>
  );
}
