#!/usr/bin/env node

var fs = require('fs')

var dirName = process.argv[2] // 你传的参数是从第 2 个开始的

fs.exists(dirName, function (exists) { // 检测目录是否存在
  if (exists) {
    console.log('dir exists')
    process.exit(4)
  } else {
    console.log(process.cwd())
    creating()
  }
})

function creating() {
  fs.mkdirSync("./" + dirName)
  process.chdir("./" + dirName)

  fs.mkdirSync('css')
  fs.mkdirSync('js')

  fs.writeFileSync("./index.html", `<!DOCTYPE>
    <title>Hello</title>
    <h1>Hi</h1>`
  ) // 生成的代码格式不好，因为空格
  fs.writeFileSync("./css/style.css", "")
  fs.writeFileSync("./js/main.js", 'var string = "Hello World";') // 写入

  fs.appendFileSync('./css/style.css', 'h1{color: red;}');
  fs.appendFileSync('./js/main.js', 'alert(string)'); // 追加 == 拼接

  process.exit(0)
}