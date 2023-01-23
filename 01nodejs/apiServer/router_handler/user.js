const bcryptjs = require('bcryptjs')


exports.reguser = (req, res) => {

    const userinfo = req.body
    console.log(userinfo)
    if (!userinfo.username || !userinfo.password) {
        return res.send('用户名或者密码不合法')
    }

    const db = require('../db/index')
    const sql = 'select * from xxx where username=? and password=?'
    db.query(sql, [userinfo.username, userinfo.password], function (err, results) {
        if (err) {
            //DB操作失败
            // res.send({ status: 1, message: err.message })
            res.cc(err)
        }
        if (results.length > 0) {
            res.send({ status: 0, message: 'select OK' })
        }
    })

    //密码加密
    userinfo.password = bcryptjs.hashSync(userinfo.password, 10)

    const insertSql = 'insert into XX set ?'
    db.query(insertSql, { username: userinfo.username, password: userinfo.password }, (err, results) => {
        if (err) {
            //DB操作失败
            // res.send({ status: 1, message: err.message })
            res.cc(err)
        }
        if (results.length !== 1) {
            res.send({ status: 1, message: err.message })

        } else {
            res.send({ status: 0, message: 'insert OK' })
        }
    })

    res.send('reguser OK')

}

exports.login = (req, res) => {
    res.send('login ok')
}