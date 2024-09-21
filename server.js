const express = require('express');
const app = express();
const schedulerRouter = require('./routes/schedulerRouter');
const babyboardRouter = require('./routes/babyboardRouter');

// 미들웨어 설정
app.use(express.json()); // JSON 파싱 미들웨어
app.use(express.urlencoded({ extended: true })); // URL-encoded 데이터 파싱

// 라우터 설정
app.use('/scheduler', schedulerRouter); 
app.use('/babyboard', babyboardRouter);
// 서버 시작
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
