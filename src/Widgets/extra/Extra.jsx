import React, { useState, useEffect } from "react";

export default function Extra({ octo }) {
  const [allContacts, setAllContacts] = useState([]);

  const propContacts = [
    { id: 1, name: "John" },
    { id: 2, name: "Mary" },
  ];
  const apiContacts = [
    { id: 3, name: "Alex" },
    { id: 4, name: "Sarah" },
  ];

  octo = "1";

  useEffect(() => {
    setAllContacts([...propContacts, ...apiContacts]);
  }, []);

  return <div></div>;
}
