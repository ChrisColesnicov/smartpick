import PropTypes from "prop-types";

export default function TextInput({
  value,
  name,
  data,
  onChange,
  comment,
  label,
}) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={data}
        id={name}
        name={name}
        placeholder={comment}
        value={value}
        onChange={onChange}
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
};
