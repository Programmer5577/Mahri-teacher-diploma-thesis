// routes/testRoutes.js
const express = require("express");
const router = express.Router();

// Массив вопросов (для примера). Настройте или загрузите данные из базы данных, если необходимо.
const questionsData = {
  javascript: [
    {
      question: "Как объявить переменную в JavaScript?",
      options: ["let", "var", "const"],
      correctAnswer: "let",
    },
    // добавьте остальные вопросы по JavaScript
  ],
  python: [
    {
      question: "Как объявить переменную в Python?",
      options: ["let", "var", "x = 5"],
      correctAnswer: "x = 5",
    },
    // добавьте остальные вопросы по Python
  ],
  // добавьте вопросы по другим языкам
};

// Маршрут для получения вопросов
router.get("/questions", (req, res) => {
  res.json(questionsData); // Возвращаем вопросы
});

module.exports = router;
