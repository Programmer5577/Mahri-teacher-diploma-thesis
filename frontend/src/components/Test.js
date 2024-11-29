// Test.js
import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import questionsData from "./questions";
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
            <h2>Testiň netijesi</h2>
            <p>Dogry jogaplar: {results.correct}</p>
            <p>Nädogry jogaplar: {results.incorrect}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Test;
