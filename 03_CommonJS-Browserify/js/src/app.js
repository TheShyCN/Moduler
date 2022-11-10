// 主文件,用于汇总模块
const module1 = require("./module1");
const module2 = require("./module2");
const module3 = require("./module3");

console.log(module1.data);
module1.test();
module2.hello();
console.log(module3.world); //undefined

//验证内置关系
console.log(module.exports === exports); //true
console.log(module.exports); //{}
console.log(exports); //{}
