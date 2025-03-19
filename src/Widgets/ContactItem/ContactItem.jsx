import React from "react";
import "./ContactItem.css";

export default function ContactItem({ id, name, phoneNumber, actions }) {
  return (
    <div className="contact-item" id={id}>
      <h4 className="contact-name">{name}</h4>
      <h4>{phoneNumber}</h4>
    </div>
  );
}
