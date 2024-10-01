import { useLoaderData } from "react-router-dom";
import PhoneCard from "../components/PhoneCard";

export default function Phones() {
  const phones = useLoaderData();

  return (
    <div>
      <h1 className="main-title">Phones page</h1>
      <section className="phone-card-container">
      {phones.map((phone) => (
        <PhoneCard key={phone.phone_id} phone={phone} />
      ))}
      </section>
    </div>
  );
}

