const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://zubairyh60:VML1kLyKiJmW7ssX@cluster0.ifr8t.mongodb.net/mainDb`, 
      {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000, // ⏳ Increase timeout to 5 seconds
        connectTimeoutMS: 10000, // ⏳ Increase connection timeout to 10 seconds
      }
    );
    console.log(`✅ Database Connected Successfully`);
  } catch (error) {
    console.error(`❌ Database Connection Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
