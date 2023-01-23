const time = require('./subfarmattime.js')

const dt = new Date()

const newDt = time.dataForamt(dt)

console.log(newDt)

// npm i moment 安装命令 第三方包mmoment
const moment = require('moment')
const ptime = moment().format('YYYY-MM-DD HH:mm:ss')
console.log('package:' + ptime)