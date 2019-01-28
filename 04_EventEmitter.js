//Node.js 所有的异步 I/O 操作在完成时都会发送一个事件到事件队列
//Node.js 里面的许多对象都会分发事件
// 所有这些产生事件的对象都是 events.EventEmitter 的实例
//EventEmitter 类
//EventEmitter 提供了多个属性，如 on 和 emit。on 函数用于绑定事件函数，emit 属性用于触发一个事件

var events=require('events');
var event=new events.EventEmitter();
event.on('some_event',function () {
    console.log("数据触发成功");
});

setTimeout(function () {
    event.emit('some_event');
    },1000);

//EventEmitter 的每个事件由一个事件名和若干个参数组成，事件名是一个字符串，通常表达一定的语义。
// 对于每个事件，EventEmitter 支持 若干个事件监听器。
var events=require('events');
var event=new events.EventEmitter();
event.on('someEvent',function (arg1,arg2) {
    console.log('listener1',arg1,arg2);
});
event.on('someEvent',function (arg1,arg2) {
    console.log('listener2',arg1,arg2);
});
event.emit('someEvent','参数1','参数2');


//EventEmitter应用
var events=require('events');
var event=new events.EventEmitter();

//创建监听器1
var listener1=function () {
    console.log('监听器listener1执行');
};
//创建监听器2
var listener2=function () {
    console.log('监听器2istener2执行');
};
event.addListener("connection",listener1);
event.on("connection",listener2);
 var listen_count=event.listenerCount("connection");
 console.log(listen_count+"个个监听器监听连接事件。");
 event.emit("connection");

 event.removeListener("connection",listener1);
 console.log('listener1不再监听');
event.emit("connection");
listen_count=event.listenerCount("connection");
console.log(listen_count+"个监听器监听连接事件。");

console.log('程序执行完毕');