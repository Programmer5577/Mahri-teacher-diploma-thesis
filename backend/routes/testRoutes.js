// routes/testRoutes.js
const express = require("express");
const router = express.Router();
const Result = require("../models/Result");

// Удаление результата теста
router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await Result.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Результат не найден" });
    }
    res.json({ message: "Результат успешно удален" });
  } catch (error) {
    console.error("Ошибка при удалении результата:", error);
    res.status(500).json({ message: "Ошибка сервера", error: error.message });
  }
});

router.delete("/deleteAll/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    await Result.deleteMany({ userId });
    res.json({ message: "Все результаты успешно удалены" });
  } catch (error) {
    console.error("Ошибка при удалении всех результатов:", error);
    res.status(500).json({ message: "Ошибка сервера", error: error.message });
  }
});

// Сохранить результат теста
router.post("/save", async (req, res) => {
  const { userId, testName, correctAnswers, incorrectAnswers, totalQuestions } =
    req.body;

  try {
    // Проверка на заполненность всех обязательных полей
    if (
      !userId ||
      !testName ||
      correctAnswers === undefined ||
      incorrectAnswers === undefined ||
      !totalQuestions
    ) {
      return res.status(400).json({ message: "Необходимо заполнить все поля" });
    }

    // Создаем новый результат и сохраняем его
    const result = new Result({
      userId,
      testName,
      correctAnswers,
      incorrectAnswers,
      totalQuestions,
    });

    await result.save();
    res.status(201).json({ message: "Результат сохранен успешно", result });
  } catch (error) {
    console.error("Ошибка сохранения результата:", error);
    res.status(500).json({ message: "Ошибка сервера", error: error.message });
  }
});

// Получить историю тестов для пользователя
router.get("/history/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const results = await Result.find({ userId }).sort({ date: -1 });
    res.json({ results });
  } catch (error) {
    console.error("Ошибка получения истории:", error);
    res.status(500).json({ message: "Ошибка сервера", error: error.message });
  }
});

module.exports = router;
