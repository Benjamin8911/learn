const { SyncHook } = require("tapable");
let queue = new SyncHook(['name', 'age']); //所有的构造函数都接收一个可选的参数，这个参数是一个字符串的数组。

// 订阅
queue.tap('1', function (name, age) {
    console.log('1.', name, age);
    return '1'
});
queue.tap('2', function (name) {
    console.log('2.',name);
});
queue.tap('3', function (name) {
    console.log('3.',name);
});

// 发布
queue.call('webpack','99');