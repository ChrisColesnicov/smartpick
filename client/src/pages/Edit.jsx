import { useLoaderData } from "react-router-dom";
import EditCard from "../components/EditCard";

export default function Edit() {
  const phones = useLoaderData();

  return (
    <div>
      <h1>Edit</h1>
      <section className="phone-card-container">
        {phones.map((phone) => (
          <EditCard key={phone.phone_id} phone={phone} />
        ))}
      </section>
    </div>
  );
}
