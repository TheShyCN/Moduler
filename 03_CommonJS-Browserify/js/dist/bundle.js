(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw ((a.code = "MODULE_NOT_FOUND"), a);
        }
        var p = (n[i] = { exports: {} });
        e[i][0].call(
          p.exports,
          function (r) {
            var n = e[i][1][r];
            return o(n || r);
          },
          p,
          p.exports,
          r,
          e,
          n,
          t
        );
      }
      return n[i].exports;
    }
    for (
      var u = "function" == typeof require && require, i = 0;
      i < t.length;
      i++
    )
      o(t[i]);
    return o;
  }
  return r;
})()(
  {
    1: [
      function (require, module, exports) {
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
      },
      { "./module1": 2, "./module2": 3, "./module3": 4 },
    ],
    2: [
      function (require, module, exports) {
        // module.exports = value
        module.exports = {
          data: "hello world",
          test() {
            console.log(this.data);
          },
        };
      },
      {},
    ],
    3: [
      function (require, module, exports) {
        // exports.xxxxx=value
        exports.hello = function () {
          console.log("我是module2里的hello");
        };
      },
      {},
    ],
    4: [
      function (require, module, exports) {
        exports.world = ["hello", "world", "!"];
        /*
    在CommonJS模块规范中,module.export和export.xxx不能混用
    如果混用,以modul.exports为主(覆盖export.xxx)

*/
        exports.world = ["hello", "world", "!"];
      },
      {},
    ],
  },
  {},
  [1]
);
