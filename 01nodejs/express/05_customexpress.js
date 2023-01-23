const qu = require('querystring')
let str = ''

const bodyParser = (req, res, next) => {

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
}
