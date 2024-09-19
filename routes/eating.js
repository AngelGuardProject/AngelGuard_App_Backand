const express = require('express');
const router = express.Router();
const authenticateJWT = require('../middlewares/authmiddleware');
const eatingcontroller = require('../controllers/eatingcontroller'); // 경로 확인

router.post('/babyeating',eatingcontroller.Babyeating); //섭취량(수유)
router.post('/pumping',eatingcontroller.Pumping); //유축량
router.post('/insertms',eatingcontroller.InsertMS); //모유수유 시간
router.get('/selecteat',eatingcontroller.SelectEat); //섭취량 조회
router.get('/selectpum',eatingcontroller.Selectpum); //유축량 조회
router.get('/selectms',eatingcontroller.SelectMS); //모유수유 시간 조회
router.get('/selectall',eatingcontroller.BeforeDa);//전체 조회


module.exports = router;

//Babyeating
//Pumping