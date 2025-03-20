import React, { useState } from "react";
import "./Navigation.css";
import List from "../List/List";
import NewNumber from "../NewNumber/NewNumber";

export default function Navigation() {
  const [showList, setShowList] = useState(true);
  const [showEditor, setShowEditor] = useState(false);
  const [contacts, setContacts] = useState([]);

  const handleShowList = () => {
    setShowList(true);
    setShowEditor(false);
  };

  const handleShowEditor = () => {
    setShowList(false);
    setShowEditor(true);
  };

  const addContact = (newContact) => {
    setContacts([newContact, ...contacts]);
  };

  const updateContact = (updatedContact) => {
    setContacts(contacts.map(contact => 
      contact.id === updatedContact.id ? updatedContact : contact
    ));
  };

  return (
    <>
      <div className="nav-wrapper">
        <button onClick={handleShowList}>Phones List</button>
        <button onClick={handleShowEditor}>Add Contact</button>
      </div>

      {showList && <List contacts={contacts} updateContact={updateContact} />}
      {showEditor && <NewNumber addContact={addContact} switchToList={handleShowList} />}
    </>
  );
}