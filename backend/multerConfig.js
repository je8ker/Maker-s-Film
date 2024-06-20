// multerConfig.js
const multer = require('multer');
const path = require('path');

function formatDateTime(date) {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);

    return `${year}${month}${day}${hours}${minutes}${seconds}`;
}


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images'); // 업로드된 파일이 저장될 디렉토리 설정
    },
    filename: function (req, file, cb) {
        const datetime = formatDateTime(new Date());
        const ext = path.extname(file.originalname);
        cb(null, `${datetime}${ext}`);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true); // 파일 허용
    } else {
        cb(new Error('이미지 파일만 업로드할 수 있습니다.'), false); // 파일 거부
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter
});

module.exports = upload;
