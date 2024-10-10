import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { deletePhone } from "../services/phoneServices";
import CustomModal from "./CustomModal";

export default function EditCard({ phone, onDelete }) {
  const [showModal, setShowModal] = useState(false);

  const handleDeleteClick = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDelete = async () => {
    await deletePhone(phone.phone_id);
    onDelete(phone.phone_id);
    setShowModal(false);
  };

  return (
    <section key={phone.phone_id} className="phone-card">
      <img src={phone.picture} alt={phone.model} />
      <div className="phone-card-text">
        <p className="phone-card-brand">{phone.brand_name}</p>
        <p className="phone-card-model">{phone.model}</p>
      </div>
      <Link to={`/admin/edit/${phone.phone_id}`}>Edit</Link>
      <button
        type="button"
        className="delete-button"
        onClick={handleDeleteClick}
      >
        Delete
      </button>
      <CustomModal
        show={showModal}
        onClose={handleCloseModal}
        onConfirm={handleDelete}
        modalTitle="You are about to delete this phone"
        modalText="Are you sure ?"
      />
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
  onDelete: PropTypes.func.isRequired,
};
