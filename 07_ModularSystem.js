//模块系统
//为了让Node.js的文件可以相互调用，Node.js提供了一个简单的模块系统。

//创建模块
var hello=require('./hello');
hello.world();
exports.world=function () {
    console.log('hello world');
};