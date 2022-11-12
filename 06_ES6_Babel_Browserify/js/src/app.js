// 主文件用于汇总各个模块
// 分别
import { data, demo1, test1 } from "./module1";
// 将module1暴露的内容收集为一个对象
import * as hello from "./module1";

// 统一
import { demo2, test2 } from "./module2";
// 默认
import module3 from "./module3";

// 混合(默认暴露, {统一,分别})
import module4, { demo4, test4, data4 } from "./module4";

console.log(hello);
console.log(data);
demo1();
test1();
demo2();
test2();
console.log(module3.name);
console.log(module3.age);
module3.speack();

console.log(module4);
demo4();
test4();
console.log(data4);
