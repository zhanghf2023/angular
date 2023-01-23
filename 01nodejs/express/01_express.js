const express = require('express')

const app = express()

app.get('/user', (req, res) => {

    if (req.query) {
        res.send({ name: 'zss', age: 40, gender: 'woman' })
    } else {
        res.send({ name: 'zs', age: 20, gender: 'man' })
    }
})

app.get('/user/:id', (req, res) => {
    res.send(req.params)
})

app.post('/user', (req, res) => {

    res.send('请求成功')

})


//对外提供静态资源
//http://127.0.0.1/01_http-webset.js
app.use(express.static('../http'))



app.listen(80, () => {

    console.log('express server running at 127.0.0.1')

})