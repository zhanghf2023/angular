const router = require('./02_express')
//注册全局中间件
app.use(router)

app.listen('80',()=>{

    console.log('127.0.0.1')
})