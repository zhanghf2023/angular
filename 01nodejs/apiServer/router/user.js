const express = require('express')

const router = express.Router()

const userHandler = require('../router_handler/user')

//注册新用户
router.post('/reguser', userHandler.reguser)

//登录
router.post('/login', userHandler.reguser)

module.exports = router
