import React, { useState } from "react";
import "./EditorPopup.css";

export default function EditorPopup({ contact, onClose, onSave,  onDelete  }) {
  const [editedContact, setEditedContact] = useState({
    id: contact.id,
    name: contact.name,
    phone: contact.phone,
  });

  const [errors, setErrors] = useState({ name: "", phone: "" });

  const validateName = (name) => {
    const nameRegex = /^[A-Za-zА-Яа-яЁё\s]+$/;
    return nameRegex.test(name) ? "" : "Invalid";
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9()\-\s]+$/;
    return phoneRegex.test(phone) ? "" : "Invalid";
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "name") {
      setEditedContact((prev) => ({ ...prev, name: value }));
      setErrors((prev) => ({ ...prev, name: validateName(value) }));
    } else if (name === "phone") {
      setEditedContact((prev) => ({ ...prev, phone: value }));
      setErrors((prev) => ({ ...prev, phone: validatePhone(value) }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(editedContact);
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(contact.id);
    }

    onClose();
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const isFormValid = !errors.name && !errors.phone;

  return (
    <div className="overlay" onClick={handleOverlayClick}>
      <div className="content">
        <h2>Edit contact</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="editName">Name: </label>
            <input
              type="text"
              id="editName"
              name="name"
              value={editedContact.name}
              onChange={handleChange}
              className={errors.name ? "error" : ""}
            />
            {errors.name && <div className="error-message">{errors.name}</div>}
          </div>

          <div className="input-group">
            <label htmlFor="editPhone">Phone: </label>
            <input
              type="text"
              id="editPhone"
              name="phone"
              value={editedContact.phone}
              onChange={handleChange}
              className={errors.phone ? "error" : ""}
            />
            {errors.phone && (
              <div className="error-message">{errors.phone}</div>
            )}
          </div>

          <div className="buttons">
            <button type="submit" disabled={!isFormValid}>
              Save
            </button>
            <button type="button" className="delete-btn" onClick={handleDelete}>
            Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
