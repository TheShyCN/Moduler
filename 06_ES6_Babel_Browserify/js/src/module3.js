// 默认暴露(只能暴露一次)

export default {
  name: "Riven",
  age: 21,
  speack() {
    console.log(`my name is ${this.name},${this.age} years old`);
  },
};
