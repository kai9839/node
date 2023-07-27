const http = require('http')
const fs = require('fs')

// 2.创建服务对象
const server = http.createServer((request, response) => {
  let { pathname } = new URL(request.url, 'http://127.0.0.1')
  if (pathname === '/') {
    let html = fs.readFileSync(__dirname + '/index.html')
    response.end(html)
  } else if (pathname === '/index.css') {
    let css = fs.readFileSync(__dirname + '/index.css')
    response.end(css)
  } else if(pathname === '/test.js'){
    let js = fs.readFileSync(__dirname + '/test.js')
    response.end(js)
  } else {
    response.statusCode = 404
    response.end('<h1>404 NOT FOUND</h1>')
  }
})

// 3.监听端口，启动服务
server.listen(9000, () => {
  console.log('服务已经启动...')
})