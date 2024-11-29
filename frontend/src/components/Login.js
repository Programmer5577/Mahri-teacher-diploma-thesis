import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios"; // Для отправки запросов на сервер
import "./Login.css"; // Добавьте свой CSS по необходимости

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Для отображения ошибок

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          username,
          password,
        }
      );

      if (response.data.user) {
        // Если пользователь найден, редиректим на страницу тестов
        navigate("/test");
      }
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>Içeri gir</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Ulanyjy ady</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Açar söz</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit">Içeri gir</button>
      </form>
      <p>
        Hasabyňyz ýokmy? <Link to="/register">Hasap aç</Link>
      </p>
    </div>
  );
}

export default Login;
