module.exports = function () {
  console.log("haha");
};
exports.world = ["hello", "world", "!"];
/*
    在CommonJS模块规范中,module.export和export.xxx不能混用
    如果混用,以modul.exports为主(覆盖export.xxx)

*/
