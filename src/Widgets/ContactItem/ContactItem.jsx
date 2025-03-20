import React from "react";
import "./ContactItem.css";

export default function ContactItem({ name, phoneNumber, onClick }) {
  const handleClick = (e) => {
    
    if (onClick && typeof onClick === 'function') {
      onClick(e);
    }
  };

  return (
    <div className="contact-item" onClick={handleClick}>
      <div className="contact-name">{name}</div>
      <div className="contact-phone">{phoneNumber}</div>
    </div>
  );
}