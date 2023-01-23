//创建web模块
const http = require('http')

const server = http.createServer()

server.on('request',req=>{

const url =req.url

const method = req.method

const str = 'Your request url is $(url),and request method is $(method)'

console.log(str)

})

server.listen(80,()=> {
console.log('server running at http://127.0.0.1')

}





//创建web模块
const http = require('http')

const server = http.createServer()

server.on('request',（req,res)=>{

const str = '您请求的 URL地址是 $(req.url),请求的method 类型为 $(req.method)'

res.setHeader('Content-Type','text/html;charset=utf-8')

console.log(str)
//设置请求的返回内容
res.end(str)

})

server.listen(80,()=> {
console.log('server running at http://127.0.0.1')

}





