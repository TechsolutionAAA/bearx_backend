require("dotenv").config();
const mongoose = require("mongoose");

// DB Config
const db = require("./keys").mongoURI;

function connectDB() {
    // Database connection
    mongoose.connect(db, { useNewURLParser: true });
    const connection = mongoose.connection;
    connection.once("open", () => {
        console.log("Database connected");
    }).on("errer", function(err) {
        console.log("Database connection failed", err);
    });
}

module.exports = connectDB;