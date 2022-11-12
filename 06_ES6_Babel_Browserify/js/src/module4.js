export default {
  name: "Riven",
  age: 23,
};
export function test4() {
  console.log("test4--module4");
}

const data4 = [4, 8, 6, 4, 6, 4];
function demo4() {
  console.log("demo4---module4", data4);
}

export { data4, demo4 };
