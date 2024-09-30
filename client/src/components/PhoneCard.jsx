import PropTypes from "prop-types";

export default function PhoneCard({ phone }) {
  return (
    <section key={phone.phone_id} className="phone-card">
      <img src={phone.picture} alt={phone.model} />
      <h2>{phone.brand_name}</h2>
      <p>{phone.model}</p>
    </section>
  );
}

PhoneCard.propTypes = {
  phone: PropTypes.shape({
    phone_id: PropTypes.number.isRequired,
    picture: PropTypes.string.isRequired,
    brand_name: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
  }).isRequired,
};
