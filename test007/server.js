var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if (!port) {
  console.log('请指定端口号后重新尝试！例如\nnode server.js 8888')
  process.exit(1)
}

var server = http.createServer(function (request, response) {
  var parsedUrl = url.parse(request.url, true)
  var pathWithQuery = request.url
  var queryString = ''
  if (pathWithQuery.indexOf('?') >= 0) { queryString = pathWithQuery.substring(pathWithQuery.indexOf('?')) }
  var path = parsedUrl.pathname
  var query = parsedUrl.query
  var method = request.method

  /******** 从这里开始看，上面不要看 ************/

  console.log('报告大大：当前查询字符串的路径为：\n' + pathWithQuery)

  if (path === '/') {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    // response.write('I am html.')
    response.write(
      '<!DOCTYPE>' +
      '<html>' +
        '<head>' +
          '<link rel="stylesheet" href="/style.css">' +
        '</head>' +
        '<body>' +
          '<h1>Hello, World! </h1>' +
          '<script src="/main.js"></script>' +
        '</body>' +
      '</html>'
    )
    response.end()
  } else if (path === '/style.css') {
    response.setHeader('Content-Type', 'text/css;charset=utf-8')
    // response.write('I am css.')
    response.write('h1 { color: red; font-size: 30px; }')
    response.end()
  } else if (path === '/main.js') {
    response.setHeader('Content-Type', 'text/javascript;charset=utf-8')
    // response.write('I am javascript.')
    response.write('alert("I am javascript")')
    response.end()
  } else {
    response.statusCode = 404
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write('I am page 404. You are lost.')
    response.end()
  }

  /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n开瓶果粒橙，喝前摇一摇，然后再打开：http://localhost:' + port)