import PropTypes from "prop-types";

export default function SelectInput({ value, name, onChange, options, label }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} value={value} onChange={onChange} required>
        <option value="" disabled>
          -- {label} list --
        </option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

SelectInput.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
