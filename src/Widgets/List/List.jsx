import React, { useEffect, useState } from "react";
import "./List.css";
import ContactItem from "../ContactItem/ContactItem";
import EditorPopup from "../EditorPopup/EditorPopup";

export default function List({ contacts: propContacts = [], updateContact }) {
  const [apiContacts, setApiContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);
  const [showEditPopup, setShowEditPopup] = useState(false);

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
    setShowEditPopup(true);
  };

  const handleClosePopup = () => {
    setShowEditPopup(false);
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
      updateContact(updatedContact);
    }

    handleClosePopup();
  };

  const handleDeleteContact = (contactId) => {
    if (apiContacts.some((contact) => contact.id === contactId)) {
      setApiContacts(apiContacts.filter((contact) => contact.id !== contactId));
    } else {
    }
    handleClosePopup();
  };

  const allContacts = [...propContacts, ...apiContacts];

  return (
    <>
      <div className="list-wrapper">
        <h3 className="list-title">Phone list</h3>
        {allContacts.map((item) => (
          <ContactItem
            key={item.id}
            name={item.name}
            phoneNumber={item.phone}
            onClick={() => handleEditContact(item)}
          />
        ))}

        {showEditPopup && editingContact && (
          <EditorPopup
          contact={editingContact}
          onClose={handleClosePopup}
          onSave={handleSaveEdit}
          onDelete={handleDeleteContact}
          />
        )}
      </div>
    </>
  );
}
