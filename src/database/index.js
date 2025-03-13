const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://zubairyh60:VML1kLyKiJmW7ssX@cluster0.ifr8t.mongodb.net/`,
      {
        useNewUrlParser: true,
      }
    );
    console.log(`Database Connected Successfully`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;