
//创建web模块
const http = require('http')
//创建文件模块
const fs = require('fs')
//创建路径模块
const path = require('path')

const server = http.createServer()

server.on('request', (req, res) => {

    const url = req.url
    let fdirname = __dirname.replace('\http', '')
    let fpath = ''
    console.log(url)
    // fdirname=fdirname.replace('\http','')
    console.log(fdirname)
    if (url === '/') {
        fpath = path.join(fdirname, 'use/test1.html')
    } else if (url === '/css') {
        fpath = path.join(fdirname, 'use/test1.css')
    } else if (url === '/script') {
        fpath = path.join(fdirname, 'use/test1.script')
    }
    //获取客户端的路径

    console.log(fpath)

    fs.readFile(fpath, 'utf8', (err, datastr) => {
        if (err) {
            console.log(err.message)
            // 读取失败
            console.log('读取失败')
        } else {
            //读取成功
            console.log('读取成功')
            // console.log(datastr)
            res.end(datastr)
        }

    })


})

server.listen(80, () => {
    console.log('server running at http://127.0.0.1')

})





