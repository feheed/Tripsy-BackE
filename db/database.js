const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://fahad:123@cluster0.5zlik.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
    console.log(`mongo connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("error", error);
  }
};

module.exports = connectDB;
