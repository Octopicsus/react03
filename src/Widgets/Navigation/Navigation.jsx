import React, { useState } from "react";
import "./Navigation.css";
import List from "../List/List";
import NewNumber from "../NewNumber/NewNumber";

export default function Navigation() {
  const [showList, setShowList] = useState(true);
  const [showEditor, setShowEditor] = useState(false);

  const handleshowList = () => {
    setShowList(true);
    setShowEditor(false);
  };

  const handleshowEditor = () => {
    setShowList(false);
    setShowEditor(true);
  };

  return (
    <>
      <div className="nav-wrapper">
        <button onClick={handleshowList}>Phones List</button>
        <button onClick={handleshowEditor}>Add Number</button>
      </div>

      {showList && <List />}
      {showEditor && <NewNumber />}
    </>
  );
}
