const mongoose = require("mongoose");

const connectMonogodb = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectMonogodb;
