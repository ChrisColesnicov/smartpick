import PropTypes from "prop-types";

export default function TextInput({ value, name, onChange, comment }) {
  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input
        type={name}
        id={name}
        name={name}
        placeholder={comment}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}

TextInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  comment: PropTypes.string.isRequired,
};