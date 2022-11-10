// 主文件,用于汇总模块
const module1 = require("./modules/module1");
const module2 = require("./modules/module2");
const module3 = require("./modules/module3");

console.log(module1.data);
module1.test();
module2.hello();
console.log(module3.world); //undefined
module3();

//验证内置关系
console.log(module.exports === exports); //true
console.log(module.exports); //{}
console.log(exports); //{}
