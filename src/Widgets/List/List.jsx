import React, { useEffect, useState } from "react";
import "./List.css";
import ContactItem from "../ContactItem/ContactItem";
import EditorPopup from "../EditorPopup/EditorPopup";

export default function List({ contacts: propContacts = [], updateContact }) {
  const [apiContacts, setApiContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const getDefaultList = async () => {
    try {
      const apiUrl = "https://jsonplaceholder.typicode.com/users";
      const response = await fetch(apiUrl);
      const data = await response.json();
      setApiContacts(data);
    } catch (error) {
      console.log("UNFOUND DATA");
    }
  };

  useEffect(() => {
    getDefaultList();
  }, []);

  const handleEditContact = (contact) => {
    setEditingContact(contact);
    setShowEditModal(true);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
    setEditingContact(null);
  };

  const handleSaveEdit = (updatedContact) => {
    const isApiContact = apiContacts.some(
      (contact) => contact.id === updatedContact.id
    );

    if (isApiContact) {
      setApiContacts(
        apiContacts.map((contact) =>
          contact.id === updatedContact.id ? updatedContact : contact
        )
      );
    } else {
      if (updateContact) {
        updateContact(updatedContact);
      }
    }

    handleCloseModal();
  };

  const allContacts = [...propContacts, ...apiContacts];

  return (
    <div className="list-wrapper">
      {allContacts.map((item) => (
        <ContactItem
          key={item.id}
          name={item.name}
          phoneNumber={item.phone}
          onClick={() => handleEditContact(item)}
        />
      ))}

      {showEditModal && editingContact && (
        <EditorPopup
          contact={editingContact}
          onClose={handleCloseModal}
          onSave={handleSaveEdit}
        />
      )}
    </div>
  );
}
