## what
- 这是一个超简易服务器
- 代码量极少，功能极为单一
- 注：用途单一，仅能用来学习服务器基础概念

## how
- 启动命令，获取 URL
```
node server port(端口号)
例如：node server 5566
```

- 发送请求方式：
  1. Chrome
    - 输入获取到的 URL
    - 查看命令行工具的反馈    
  2. 命令行工具 curl 命令
    - 输入 curl 命令，例如 curl URL
    - 查看命令行工具的反馈

## 详细说明
- 该简易服务器功能描述
  1. 请求路径为 '/' 时，返回 HTML 内容， HTML 内容包括：一个 CSS link 和一个 JavaScript src；
  2. 请求路径为 '/style.css' 时，返回 CSS 内容；
  3. 请求路径为 '/main.js' 时，返回 JavaScript 内容；
  4. 请求以上路径外的其他路径时，返回 404 。
  