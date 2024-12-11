// src/components/Test.js
import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import questionsData from "./questions";
import axios from "axios"; // Подключаем axios для отправки данных на сервер
import "./Test.css";

function Test() {
  const [questions, setQuestions] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isTestComplete, setIsTestComplete] = useState(false);
  const [results, setResults] = useState({ correct: 0, incorrect: 0 });

  useEffect(() => {
    // Load questions from questionsData based on selected language
    const languageQuestions = questionsData[selectedLanguage] || [];
    setQuestions(languageQuestions);
    setCurrentQuestionIndex(0);
    setIsTestComplete(false);
    setResults({ correct: 0, incorrect: 0 });
  }, [selectedLanguage]);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (answer) => {
    if (!currentQuestion) return;

    const isCorrect = answer === currentQuestion.correctAnswer;
    setResults((prev) =>
      isCorrect
        ? { ...prev, correct: prev.correct + 1 }
        : { ...prev, incorrect: prev.incorrect + 1 }
    );

    // Move to next question or complete test
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setIsTestComplete(true);
    }
  };

  useEffect(() => {
    if (isTestComplete) {
      // Отправка результатов на сервер
      const resultData = {
        userId: "64b0c8b2d16f9c7a5d6c3d3f", // Замените на реальный userId
        testName: selectedLanguage,
        correctAnswers: results.correct,
        incorrectAnswers: results.incorrect,
        totalQuestions: questions.length,
      };

      axios
        .post("http://localhost:5000/api/test/save", resultData)
        .then((response) => {
          console.log("Результаты успешно сохранены:", response.data);
        })
        .catch((error) => {
          console.error("Ошибка сохранения результатов:", error);
        });
    }
  }, [isTestComplete, results, selectedLanguage, questions.length]);

  return (
    <div className="test-container">
      <Header />
      <SideBar setSelectedLanguage={setSelectedLanguage} />
      <div className="test-content">
        {!isTestComplete ? (
          <div className="question-container">
            <h2>{selectedLanguage.toUpperCase()} Test</h2>
            {currentQuestion ? (
              <>
                <p>{currentQuestion.question}</p>
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className="answer-option"
                  >
                    {option}
                  </button>
                ))}
              </>
            ) : (
              <p>Loading question...</p>
            )}
          </div>
        ) : (
          <div className="results-container">
            <h2>Testiň jogaby:</h2>
            <p>Dogry jogap: {results.correct}</p>
            <p>Nädogry jogap: {results.incorrect}</p>
            <p>Jemi: {questions.length}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Test;
