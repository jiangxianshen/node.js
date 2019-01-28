//第四部分 模块
// var counter=function(arr){
//     return "there are " + arr.length +" elements";
// }
// module.exports = counter;

var counter=function(arr){
    return "there are " + arr.length +" elements";
}
var adder=function(a,b){
    return `the sum of the two numbers is ${a+b}`;
}
var pi=3.1415926;

// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;
// 也可以键值对形式
module.exports={
    counter:counter,
    adder:adder,
    pi:pi,
}