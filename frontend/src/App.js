// components/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Test from "./components/Test";
import ResultPage from "./components/ResultPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<Test />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/" element={<Login />} /> {/* Default route to login */}
      </Routes>
    </Router>
  );
}

export default App;
