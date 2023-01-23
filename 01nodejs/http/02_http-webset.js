
//创建web模块
const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {

    const url = req.url
    console.log(url)
    let content = '<h1>404 Not found!</h1>'

    if (url === '/' || url === '/index.html') {
        content = '<h1>首页</h1>'
    } else if (url === '/about.html') {
        content = '<h1>关于页面</h1>'
    }
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    // console.log(str)
    //设置请求的返回内容
    res.end(content)

})

server.listen(80, () => {
    console.log('server running at http://127.0.0.1')

})





