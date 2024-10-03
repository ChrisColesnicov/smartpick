import PropTypes from "prop-types";

export default function CompareCard({ phone, className }) {
  return (
    <section className={`compare-card ${className}`}>
      <img src={phone.picture} alt={phone.model} />
      <div className="phone-card-text">
        <p className="phone-card-brand">{phone.brand_name}</p>
        <p className="phone-card-model">{phone.model}</p>
      </div>
    </section>
  );
}

CompareCard.propTypes = {
  phone: PropTypes.shape({
    phone_id: PropTypes.number.isRequired,
    picture: PropTypes.string.isRequired,
    brand_name: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
  }).isRequired,
  className: PropTypes.string,
};

CompareCard.defaultProps = {
  className: "",
};
