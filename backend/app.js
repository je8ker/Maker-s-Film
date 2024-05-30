const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const PORT = 3000;
const { mongoDB } = require("./db");

console.log("Maker's Film")
app.use(express.static(path.join(__dirname, '../dist')));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../dist/index.html"));
});
mongoDB();
app.use(bodyParser.json());


app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});