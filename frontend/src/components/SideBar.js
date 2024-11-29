// SideBar.js
import React from "react";
import "./SideBar.css";

function SideBar({ setSelectedLanguage }) {
  return (
    <div className="sidebar">
      <h3>Özüňize gerek diliňizi saýlaň</h3>
      <ul>
        <li onClick={() => setSelectedLanguage("javascript")}>JavaScript</li>
        <li onClick={() => setSelectedLanguage("python")}>Python</li>
        <li onClick={() => setSelectedLanguage("c")}>C</li>
        <li onClick={() => setSelectedLanguage("cplusplus")}>C++</li>
        <li onClick={() => setSelectedLanguage("go")}>Go</li>
      </ul>
    </div>
  );
}

export default SideBar;
