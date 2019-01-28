//回调函数
//Node.js 异步编程的直接体现就是回调

//1、阻塞代码实例
var fs=require("fs");
var data=fs.readFileSync("readMe.txt");
console.log(data.toString());
console.log("程序执行结束");

//1、非阻塞代码实例
var fs=require('fs');
fs.readFile("readMe.txt",function (err,data) {
    if(err) return console.error(err);
    console.log(data.toString());
});
console.log("程序执行结束");
