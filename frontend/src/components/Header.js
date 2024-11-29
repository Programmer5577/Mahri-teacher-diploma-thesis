import React from "react";
import "./Header.css";
import Img from "../assets/images/users-vector-icon-png_260862.png";

function Header() {
  return (
    <header className="header">
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
