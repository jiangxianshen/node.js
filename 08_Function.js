//函数
function say(word) {
console.log(word);
}
function execute(someFunction,value) {
    someFunction(value);
}
execute(say,'hello');

//匿名函数
function execute2(somefunction,value) {
    somefunction(value);
}
execute2(function (word) {
    console.log(word);
},'hello2');