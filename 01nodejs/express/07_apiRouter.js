const express = require('express')

const app = express()

app.post('/user', (req, res) => {
    
    //使用中间件挂载的属性
    console.log(req.body)
    res.send(body)
    
})

app.listen(80, function () {
    console.log('Express server running at http://127.0.0.1')
})