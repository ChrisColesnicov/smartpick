import PropTypes from "prop-types";

export default function SelectInput({
  value,
  name,
  onChange,
  options,
  label,
  classname,
}) {
  return (
    <div className={classname}>
      <label htmlFor={name} className="input-group-label">
        {label}
      </label>
      <select name={name} id={name} value={value} onChange={onChange}>
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
  value: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  classname: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};
