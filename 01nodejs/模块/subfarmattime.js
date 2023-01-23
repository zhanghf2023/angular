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

module.exports = {
    dataForamt

}