import React from "react";
import "./ResultPage.css";

function ResultPage() {
  return (
    <div className="result-page">
      <h2>Ваш результат</h2>
      <p>Поздравляем, вы успешно прошли тест!</p>
      <button className="back-btn">Назад к тестам</button>
    </div>
  );
}

export default ResultPage;
