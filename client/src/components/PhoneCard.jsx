import { useState } from "react";
import PropTypes from "prop-types";
import Checkbox from "./Checkbox";

export default function PhoneCard({ phone, compare, handleCompare }) {
  const [checked, setChecked] = useState(compare.includes(phone.phone_id));

  const handleCheck = () => {
    handleCompare(phone.phone_id);
    setChecked(!checked);
  };

  return (
    <section
      key={phone.phone_id}
      className={`phone-card ${checked ? "selected" : ""}`}
    >
      <div className="checkbox-hover">
      <Checkbox
        label="Compare"
        value={checked}
        onChange={handleCheck}
        disabled={!checked && compare.length >= 3}
      />
      </div>
      <img src={phone.picture} alt={phone.model} />
      <div className="phone-card-text">
        <p className="phone-card-brand">{phone.brand_name}</p>
        <p className="phone-card-model">{phone.model}</p>
      </div>
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
  compare: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleCompare: PropTypes.func.isRequired,
};
