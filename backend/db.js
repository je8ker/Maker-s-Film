//db.js
const mongoose = require("mongoose");
require('dotenv').config();
const dburl = process.env.DB_URL;

exports.mongoDB = () => {
    mongoose
        .connect(dburl)
        .then(() => console.log("DB connected"))
        .catch((err) => console.log("DB connection failed", err));
}

