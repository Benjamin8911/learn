// 泛型
// 类型变量，只用于表示类型而不是值
function identity<T>(arg: T): T {
  return arg
}
// 使用
// 1、传入所有的参数，包含类型参数：
let output = identity<string>('myString')
// 2、编译器会根据传入的参数自动地帮我们确定T的类型：
let output1 = identity('myString')

// 使用泛型变量
// 另一种写法
// function loggingIdentity<T>(arg: Array<T>): Array<T> 
function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length);  // Array has a .length, so no more error
  return arg;
};

// 泛型接口
(function () {
  interface GenericIdentityFn {
    <T>(arg: T): T;
  }

  function identity<T>(arg: T): T {
    return arg
  }

  let myIdentity: GenericIdentityFn = identity
})();
// 我们可能想把泛型参数当作整个接口的一个参数。 这样我们就能清楚的知道使用的具体是哪个泛型类型
(function () {
  interface GenericIdentityFn<T> {
    (arg: T): T;
  }

  function identity<T>(arg: T): T {
    return arg;
  }

  let myIdentity: GenericIdentityFn<number> = identity;
})()

// 泛型类
