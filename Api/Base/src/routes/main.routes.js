const express = require('express');
const { prueba,AnswerFormat } = require('../controllers/main.controller');

const router = express.Router();

router.get('/prueba', prueba);
router.post('/messageData', AnswerFormat);


module.exports = router; 