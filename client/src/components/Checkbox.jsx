import PropTypes from "prop-types";

export default function Checkbox({ label, value, onChange, disabled }) {
  return (
    <label htmlFor={label} className="compare-checkbox">
      <input
        type="checkbox"
        value={value}
        onChange={onChange}
        name={label}
        disabled={disabled}
      />
      X
    </label>
  );
}
Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

Checkbox.defaultProps = {
  disabled: false,
};
