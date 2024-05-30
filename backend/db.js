const mongoose = require("mongoose");
require('dotenv').config()
const dburl = process.env.DB_URL;


exports.mongoDB = () => {
    mongoose
        .connect(dburl)
        .then(() => console.log("connected"))
        .catch((err) => console.log("mongodb connection failed",err));
}