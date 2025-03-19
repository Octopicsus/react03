import React from "react";
import "./NewNumber.css";

export default function NewNumber() {
  return (
    <div>
      <form action="addContact" className="contact-form">
        <h3>New Contact</h3>

        <div className="input-group">
          <label htmlFor="inputName">Name: </label>
          <input
            type="text"
            id="inputName"
            name="inputName"
        
          />
        </div>

        <div className="input-group">
          <label htmlFor="inputName">Phone: </label>
          <input
            type="text"
            id="inputPhone"
            name="inputPhone"
     
          />
        </div>

        <button type="submit" className="addBtn">Add</button>
      </form>
    </div>
  );
}
