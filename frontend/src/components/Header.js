import React from "react";
import "./Header.css";
import Img from "../assets/images/users-vector-icon-png_260862.png";

function Header() {
  return (
    <header className="header">
      <h2 className="header_title">Sorag-jogap web goşundysy</h2>
      <div className="user-info">
        <span className="username">Talyp</span>
        <div className="avatar">
          <img src={Img} alt="Аватар пользователя" id="userAvatar" />
        </div>
      </div>
    </header>
  );
}

export default Header;
