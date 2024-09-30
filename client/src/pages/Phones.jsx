import { useLoaderData } from "react-router-dom";
import PhoneCard from "../components/PhoneCard";

export default function Phones() {
  const phones = useLoaderData();

  return (
    <div>
      <h1>Phones page</h1>
      {phones.map((phone) => (
        <PhoneCard key={phone.phone_id} phone={phone} />
      ))}
    </div>
  );
}

