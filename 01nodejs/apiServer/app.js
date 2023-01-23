const express = require('express')

const app = express()


//导入cors中间件
const cors = require('cors')
//跨域
app.use(cors())
//配置解析数据表单中间件（）
//req.body
app.use(express.urlencoded({ extended: false }))

app.use(function (req, res, next) {
    res.cc = function (err, status = 1) {
        res.send({
            //状态
            status, message: err instanceof Error ? err.message : err
        })
    }
    next()
})

const userRouter = require('./router/user')
app.use('/api', userRouter)


app.listen(3007, function () {
    console.log('api server running at http://127.0.0.1/3007')
})