//所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：
// data - 当有数据可读时触发。
// end - 没有更多的数据可读时触发。
// error - 在接收和写入过程中发生错误时触发。
// finish - 所有数据已被写入到底层系统时触发。

//1、从流中读取数据
var fs = require("fs");
var data="";

// 创建可读流
var readerStream=fs.createReadStream('input.txt');
// 设置编码为 utf8。
readerStream.setEncoding('UTF8');
// 处理流事件 --> data, end, and error
readerStream.on('data',function (chunk) {
    data+=chunk;
});
readerStream.on('end',function () {
    console.log(data);
});
readerStream.on('error',function (err) {
    console.log(err.stack);
});
console.log("执行完毕");

//写入流
var fs = require('fs');
var data='写入数据内容';
// 创建一个可以写入的流，写入到文件 output.txt 中
var writeStream=fs.createWriteStream('output.txt');
// 使用 utf8 编码写入数据
writeStream.write(data,'UTF8');
// 标记文件末尾
writeStream.end();
// 处理流事件 --> data, end, and error
writeStream.on('finish',function () {
    console.log('输入完成');
});
writeStream.on('error',function (err) {
    console.log(err.stack);
});
console.log("程序执行完毕");

//管道流
//通过读取一个文件内容并将内容写入到另外一个文件中。
var fs = require('fs');
// 创建一个可读流
var readerStream2=fs.createReadStream('input.txt');
// 创建一个可写流
var writeStream2=fs.createWriteStream('output.txt');
// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream2.pipe(writeStream2);
console.log("程序执行完毕");

//链式流

