import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function EditCard({ phone }) {
  return (
    <section key={phone.phone_id} className="phone-card">
      <img src={phone.picture} alt={phone.model} />
      <div className="phone-card-text">
        <p className="phone-card-brand">{phone.brand_name}</p>
        <p className="phone-card-model">{phone.model}</p>
      </div>
      <Link to={`/admin/edit/${phone.phone_id}`}>Edit</Link>
    </section>
  );
}

EditCard.propTypes = {
  phone: PropTypes.shape({
    phone_id: PropTypes.number.isRequired,
    picture: PropTypes.string.isRequired,
    brand_name: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
  }).isRequired,
};
