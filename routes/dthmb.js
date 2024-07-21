const express = require('express');
const router = express.Router();
const DTHcontroller = require('../controllers/dthmbcontroller');

router.get('/data/:id',DTHcontroller.getTempData); //온습도 받기

module.exports = router;