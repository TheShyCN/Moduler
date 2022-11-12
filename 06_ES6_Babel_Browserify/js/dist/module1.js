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