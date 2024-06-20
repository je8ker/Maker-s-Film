// imageRoutes.js
const express = require('express');
const multer = require('../multerConfig');
const Image = require('../models/Image');
const path = require('path');



const router = express.Router();

// Upload image route
router.post('/upload', multer.single('file'), async (req, res) => {
    const {email, message} = req.body;
    const imgurl = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
    try {
        const image = new Image({
            filename: req.file.filename,
            url: imgurl,
            email,
            message
        });
        await image.save();
        res.json(image);
        console.log("file upload successs!")
        console.log("save data :",image)
    } catch (error) {
        console.error("Error uploading file:", error);
        res.status(500).json({error: "Failed to upload image."});
    }
});
// Get images route
// router.get('/images', async (req, res) => {
//     console.log("데이터불러오는요청받음")
//     try {
//         const images = await Image.find({}, (err, images)=>{
//             if(err){
//                 console.log("데이터를 불러오는중 오류발생")
//             } else{
//                 console.log("불러온 데이터:" , images);
//             }
//         });
//         console.log("Images fetched from database:", images);
//         res.set('Cache-Control', 'no-store');  // 캐시를 사용하지 않도록 설정
//         res.json(images);
//     } catch (error) {
//         console.error('Error fetching images:', error);
//         res.status(500).json({ error: 'Failed to fetch images' });
//     }
// });

// router.get('/images', async (req, res) => {
//     try {
//         const images = await Image.find({});
//         console.log("Fetched images from database:", images);
//         res.set('Cache-Control', 'no-store');  // 캐시를 사용하지 않도록 설정
//         res.json(images);
//     } catch (error) {
//         console.error('Error fetching images:', error);
//         res.status(500).json({ error: 'Failed to fetch images' });
//     }
// });



router.get('/images/:img', function (req, res) {
    const imgPath = path.join(__dirname, '../public/images/', req.params.img);
    res.sendFile(imgPath);
});
module.exports = router;
