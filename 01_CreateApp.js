//
/*  Node.js 应用组成部分
1、引入 required 模块：我们可以使用 require 指令来载入 Node.js 模块。
2、创建服务器：服务器可以监听客户端的请求，类似于 Apache 、Nginx 等 HTTP 服务器。
3、接收请求与响应请求 服务器很容易创建，客户端可以使用浏览器或终端发送 HTTP 请求，服务器接收请求后返回响应数据。
*/

var http=require("http");
var server=http.createServer(function (request,response) {
    console.log("request received");
    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200,{'Content-Type':'text/plain'});
    //发送相应数据
    response.end('response data');
});
server.listen(3000,'127.0.0.1');
console.log('sever start run at port 3000');