import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ResultPage.css";

function ResultPage() {
  const [results, setResults] = useState([]);
  const userId = "64b0c8b2d16f9c7a5d6c3d3f"; // Ваш реальный userId

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/test/history/${userId}`
        );
        setResults(response.data.results);
      } catch (error) {
        console.error("Ошибка при получении результатов:", error);
      }
    };

    fetchResults();
  }, [userId]);

  const handleDelete = async (resultId) => {
    try {
      await axios.delete(`http://localhost:5000/api/test/delete/${resultId}`);
      setResults((prevResults) =>
        prevResults.filter((result) => result._id !== resultId)
      );
    } catch (error) {
      console.error("Ошибка при удалении результата:", error);
    }
  };

  const handleDeleteAll = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/test/deleteAll/${userId}`);
      setResults([]);
    } catch (error) {
      console.error("Ошибка при удалении всех результатов:", error);
    }
  };

  return (
    <div className="result-page">
      <header className="result-header">
        <h2>Siziň netijeleriňiz</h2>
        <button className="delete-all-button" onClick={handleDeleteAll}>
          Ählisini öçürmek
        </button>
      </header>
      {results.length > 0 ? (
        <ul className="results-list">
          {results.map((result) => (
            <li key={result._id} className="result-item">
              <div className="result-info">
                <h3>{result.testName}</h3>
                <p>
                  <strong>Dogry:</strong> {result.correctAnswers},{" "}
                  <strong>Nädogry:</strong> {result.incorrectAnswers},{" "}
                  <strong>Jemi:</strong> {result.totalQuestions}
                </p>
                <p>
                  <em>Sene: {new Date(result.date).toLocaleString()}</em>
                </p>
              </div>
              <button
                className="delete-button"
                onClick={() => handleDelete(result._id)}
              >
                Öçürmek
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-results">Netije entek ýok.</p>
      )}
    </div>
  );
}

export default ResultPage;
