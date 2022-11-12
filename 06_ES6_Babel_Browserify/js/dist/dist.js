(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"./module1":2,"./module2":3,"./module3":4,"./module4":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.demo1 = demo1;
exports.test1 = test1;
// 分别暴露
var data = exports.data = "Riven";

function demo1() {
  console.log("module1---demo1---function", data);
}

function test1() {
  console.log("module1---test1---function", data);
}
},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 统一暴露

var arr = [1, 2, 3, 4, 7];

function demo2() {
  console.log("module2---demo2---function", arr);
}
function test2() {
  console.log("module2---test2---function", arr);
}
// 精简版
exports.demo2 = demo2;
exports.test2 = test2;
//
},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 默认暴露(只能暴露一次)

exports.default = {
  name: "Riven",
  age: 21,
  speack: function speack() {
    console.log("my name is " + this.name + "," + this.age + " years old");
  }
};
},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.test4 = test4;
exports.default = {
  name: "Riven",
  age: 23
};
function test4() {
  console.log("test4--module4");
}

var data4 = [4, 8, 6, 4, 6, 4];
function demo4() {
  console.log("demo4---module4", data4);
}

exports.data4 = data4;
exports.demo4 = demo4;
},{}]},{},[1]);
