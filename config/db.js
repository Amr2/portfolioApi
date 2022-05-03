const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `connected to ${connect.connection.host} db successfully`.cyan.underline
    );
  } catch (error) {
    console.log("faild to connect to DataBase".magenta.underline);
    process.exit(1);
  }
};

module.exports = connectDB;
