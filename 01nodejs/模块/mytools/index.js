function dataForamt(dtStr) {
    const dt = new Date(dtStr)
    const y = dt.getFullYear()
    const m = dt.getMonth()
    const d = dt.getDay()

    const hh = dt.getHours()
    const mm = dt.getMinutes()
    const ss = dt.getSeconds()

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

function padZero(n) {
    return n > 9 ? n : '0' + n
}

const mytools = require('./mytools/htmlEscapce.js')
requestAnimationFrame()

//向外暴漏可调用的函数
module.exports = {
    dataForamt,
    htmlEscape

}