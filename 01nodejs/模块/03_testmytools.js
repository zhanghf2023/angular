const mytools = require('./mytools/index')

const ftime =mytools.dataForamt(new Date)
console.log(ftime)

const htmlstr = '<h1 titile="abc">这是H1标签<span>123&nbsp;</span></h1>'

const str = mytools.htmlEscape(htmlstr)
console.log(str)