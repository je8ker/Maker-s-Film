const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');
const upload = require('./multerConfig');
const imageRoutes = require('./routes/imageRoutes');
const app = express();
const router = express.Router();
const PORT = 3000;
const {mongoDB} = require("./db");
const Image = require('./models/Image');
const cors = require('cors');


app.use(cors());
console.log("Maker's Film")

app.use(express.static(path.join(__dirname, '../dist')));
app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../dist/index.html"));
});
mongoDB();

//---------------------------------------
//테스트 코드
// 데이터를 조회하고 콘솔에 출력
const fetchDataAndLog = async () => {
    try {
        const images = await Image.find({});
        console.log("app images from database:", images);
    } catch (error) {
        console.error('Error fetching images:', error);
    }
};
// 서버 시작 시 데이터를 조회하고 콘솔에 출력
fetchDataAndLog();


app.post('/api/images/',function (err,req){
    const images =  Image.find({});
    console.log(images)
    req.render('list:',images)

})

//---------------------------------------

app.use(bodyParser.json());
app.use(express.json());

app.use('/api', imageRoutes);

app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});