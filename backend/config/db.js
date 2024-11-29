const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); // Загрузка переменных окружения из .env

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB подключена");
  } catch (error) {
    console.error("Ошибка подключения к MongoDB:", error);
    process.exit(1);
  }
}

module.exports = connectDB;
