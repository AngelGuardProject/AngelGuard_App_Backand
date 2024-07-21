const express = require('express');
const router = express.Router();
const userController = require('../controllers/usercontroller'); // 경로 확인

router.post('/signUp',userController.CsignUp); //회원가입
router.post('/login',userController.Clogin); //로그인

module.exports = router;