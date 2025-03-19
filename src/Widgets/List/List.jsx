import React, { useEffect, useState } from "react";
import "./List.css";
import ContactItem from "../ContactItem/ContactItem";

export default function List() {
  const [contact, setContact] = useState([]);

  const getDefaultList = async () => {
    try {
      const apiUrl = " https://jsonplaceholder.typicode.com/users";

      const respone = await fetch(apiUrl);
      const data = await respone.json();
      setContact([...data]);
    } catch (error) {
      console.log("UNFOUND DATA");
    }
  };

  useEffect(() => {
    getDefaultList();
  }, []);

  return (
    <div className="list-wrapper">
      {contact.map((item) => (
        <ContactItem
          key={item.id}
          name={item.name}
          phoneNumber={item.phone}
        />
      ))}
    </div>
  );
}
