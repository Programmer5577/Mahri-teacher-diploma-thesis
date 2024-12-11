const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  testName: {
    type: String,
    required: true,
  },
  correctAnswers: {
    // Поле для правильных ответов
    type: Number,
    required: true,
  },
  incorrectAnswers: {
    // Поле для неправильных ответов
    type: Number,
    required: true,
  },
  totalQuestions: {
    // Поле для общего количества вопросов
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Result", resultSchema);
