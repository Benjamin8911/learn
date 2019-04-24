// 迭代器和生成器
// for of vs for in
// for..of和for..in均可迭代一个列表；
// 但是用于迭代的值却不同，for..in迭代的是对象的 键 的列表，而for..of则迭代对象的键对应的值。
(function () {
  let list = [4, 5, 6];

  for (let i in list) {
    console.log(i); // "0", "1", "2",
  }

  for (let i of list) {
    console.log(i); // "4", "5", "6"
  }
})();