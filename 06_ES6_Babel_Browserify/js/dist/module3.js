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