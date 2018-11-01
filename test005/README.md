## 概述
- 在当前目录中，自动生成 index.html css/style.css js/main.js 文件，并且文件中包含固定内容
- 实现方式：1 bash 脚本；2 nodejs 脚本

## 使用
创建以 dir-name 命名的目录：

#### bash 脚本
1. $ demo.sh (dir-name) <br>
完成 .bashrc 文件配置
2. sh (绝对路径-demo.sh文件) (dir-name) <br>
未完成 .bashrc 文件配置

#### nodejs 脚本
1. $ jsdemo.js (dir-name) <br>
完成 .bashrc 文件配置 / shebang 配置
2. (路径-jsdemo.js文件) (dir-name) <br>
只完成 shebang 配置
3. node (路径-jsdemo.js文件) (dir-name) <br>
未完成 .bashrc 文件配置 / shebang 配置

## 说明
1. 配置 .bashrc 文件 <br>
~/.bashrc 文件为 bash 的配置文件，需用户手动配置 <br>
PATH 设置：在 ~/.bashrc 文件中添加 export PATH="(绝对路径-demo.sh文件所在目录):$PATH"
2. 配置 shebang —— 默认执行环境（当前项目：仅 node 环境 适用） <br>
在 jsdemo.js 文件第一行添加 #!/usr/bin/env node
3. 注意事项 <br>
符号 ‘=’ 前后不能有空格，否则报错 <br>
符号 ‘=’ 后跟双引号包裹内容，否则可能报错（单引号会报错）
4. 备注 <br>
命令 demo.sh 与文件名称一致。若文件名称为 demo，那么命令也就是 demo；
