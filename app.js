//第二部分 全局对象
// console.log("hello world");

// 2.1 3秒后输出
// setTimeout(function(){
//     console.log("3 seconds have passed plesae print hello world");
// },3000);

// 2.2 每隔2秒后输出
// setInterval(function(){
//     console.log(" hello world");
// },2000);


// 2.3 累加
// var time=0;
// setInterval(function(){
//     time +=2;
//     console.log(time + "hello world");
// },2000);

// 2.3 条件输出
// var time=0;
// var timer=setInterval(function(){
//     time +=2;
//     console.log(time + "hello world");
//     if(time>6){
//         clearInterval(timer);
//     }
// },2000);

// 2.4 文件夹
// console.log(__dirname);
// 文件名
// console.log(__filename);


// 第三部分回调函数
// 3.1  函数表达式
// function sayhi() {
//     console.log("hello shabi");
// }
// sayhi();

// var saybye = function(){
//     console.log("bye");
// }
// saybye();

// 3.2  回调函数
// function callfunction(fun,name){
//     fun(name);
// }
// var saybye = function(name){
//     console.log(name+" byebye");
// }
// callfunction(saybye,"jiangxianwen");

// 常用写法
// function callfunction(fun,name){
//     fun(name);
// }
// callfunction( function(name){
//     console.log(name+" byebye");
// },"jiangxianwen");


// 第四部分模块
//  4.1 调用模块count
// var counter=require('./count')
// console.log(counter(['jshad','ewff','qefar']));

// var stuff=require('./count')
// console.log(stuff.counter(['jshad','ewff','qefar']));
// console.log(stuff.adder(3,2));
// console.log(stuff.pi);

// 第五部分 事件
// var events=require('events');
// var myEmitter=new events.EventEmitter();
// myEmitter.on('someEvent',function(message){
//     console.log(message);
// })
// myEmitter.emit('someEvent','the event was emitted');

// var events=require('events');
// var util=require('util');

// var Person=function(name){
//     this.name=name
// }

// util.inherits(Person,events.EventEmitter);

// var xiaoming=new Person('xiaoming');
// var lili=new Person('lili');
// var lucy=new Person('lucy');

// var person=[xiaoming,lili,lucy];

// person.forEach(function(person){
//     person.on('speak',function(message){
//         console.log(person.name+"said:"+message);
//     })
// })

// xiaoming.emit('speak','hi');
// lucy.emit('speak','i want a curry');

// 第六部分 读写文件(同步)
// var fs=require('fs');
// var readMe=fs.readFileSync("readMe.txt","utf8");
// console.log(readMe);
// fs.writeFileSync("writeMe.txt","hello world");

// 异步读取
// var fs=require('fs');
// var readMe=fs.readFile("readMe.txt","utf8",function(err,data){
//     console.log(data);
// });
// console.log("finished");

// 第七部分 创建删除目录
//  var fs=require('fs');
// 删除文件
// fs.unlink("writeMe.txt",function(){
//     console.log("delete writeMe.txt file");
// })

// 新建目录
// fs.mkdirSync('stuff');
// 删除目录
// fs.rmdirSync('stuff');

// var fs=require('fs');
// fs.mkdir('stuff',function(){
//     fs.readFile('readMe.txt','utf8',function(err,data){
//         fs.writeFile('./stuff/writeMe.txt',data,function(){
//             console.log('copy successfully');
//         })
//     })
// })

// 第八部分 流和管道
// ls 流
// ls | grep app | grep js

// 第九部分 web服务器
var http=require('http');
var server=http.createServer(function(request,response){
    console.log('Request received');
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write('hello from out application\n');
    response.end('response data');
})
server.listen(3000,'127.0.0.1');
console.log('server started on localhost port 3000');