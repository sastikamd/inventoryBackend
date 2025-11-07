const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI;

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(mongoURI);
    console.log("✅ Connected to MongoDB (Render + Atlas) Successfully!");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
  }
};

module.exports = connectToMongo;
