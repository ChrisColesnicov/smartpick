import PropTypes from "prop-types";

export default function TextInput({
  value,
  name,
  data,
  onChange,
  comment,
  label,
  classname,
}) {
  return (
    <div className={classname}>
      <label htmlFor={name} className="input-group-label">
        {label}
      </label>
      <input
        type={data}
        id={name}
        name={name}
        placeholder={comment}
        value={value}
        onChange={onChange}
        className="input-group-input"
      />
    </div>
  );
}

TextInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  comment: PropTypes.string.isRequired,
  classname: PropTypes.string.isRequired,
};
