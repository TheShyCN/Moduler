"use strict";

var _module = require("./module1");

var hello = _interopRequireWildcard(_module);

var _module2 = require("./module2");

var _module3 = require("./module3");

var _module4 = _interopRequireDefault(_module3);

var _module5 = require("./module4");

var _module6 = _interopRequireDefault(_module5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// 默认

// 将module1暴露的内容收集为一个对象
console.log(hello);

// 混合


// 统一
// 主文件用于汇总各个模块
// 分别

console.log(_module.data);
(0, _module.demo1)();
(0, _module.test1)();
(0, _module2.demo2)();
(0, _module2.test2)();
console.log(_module4.default.name);
console.log(_module4.default.age);
_module4.default.speack();

console.log(_module6.default);
(0, _module5.demo4)();
(0, _module5.test4)();
console.log(_module5.data4);