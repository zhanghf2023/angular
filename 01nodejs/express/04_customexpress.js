const express = require('express')

const app = express()

const qu = require('querystring')
let str = ''

app.use((req, res, next) => {

    //定义中间件具体的业务逻辑

    //监听数据输入事件
    req.on('data', (chunk) => {
        str += chunk
    })

    //监听req的end事件
    req.on('end', () => {
        const body = qu.parse(str)
        //挂载body属性
        req.body = body
        console.log(body)

    })
    next()
})

app.post('/user', (req, res) => {
    console.log(str)
    //使用中间件挂载的属性
    console.log(req.body)
    res.send(body)
    
})

app.listen(80, function () {
    console.log('Express server running at http://127.0.0.1')
})