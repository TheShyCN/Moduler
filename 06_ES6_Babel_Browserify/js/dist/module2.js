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