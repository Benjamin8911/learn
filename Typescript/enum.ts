// 枚举
// TypeScript支持数字的和基于字符串的枚举

// 数字枚举
// Up使用初始化为 1。 其余的成员会从 1开始自动增长
enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}

// 使用枚举很简单：通过枚举的属性来访问枚举成员，和枚举的名字来访问枚举类型：
(function () {
  enum Response {
    No = 0,
    Yes = 1,
  }

  function respond(recipient: string, message: Response): void {
    // ...
  }

  respond("Princess Caroline", Response.Yes)
})();

// 字符串枚举
(function () {
  enum Direction {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
  }
})();

// 计算的和常量成员
// 每个枚举成员都带有一个值，它可以是 常量或 计算出来的。
(function () {
  // 当满足如下条件时，枚举成员被当作是常量：
  // 它是枚举的第一个成员且没有初始化器，这种情况下它被赋予值 0：
  enum E { X }

  // 它不带有初始化器且它之前的枚举成员是一个 数字常量。
  // 这种情况下，当前枚举成员的值为它上一个枚举成员的值加1。
  enum E1 { X, Y, Z }

  enum E2 {
    A = 1, B, C
  }

  // 一个枚举表达式字面量（主要是字符串字面量或数字字面量）
  // 一个对之前定义的常量枚举成员的引用（可以是在不同的枚举类型中定义的）
  // 带括号的常量枚举表达式
  // 一元运算符 +, -, ~其中之一应用在了常量枚举表达式
  // 常量枚举表达式做为二元运算符 +, -, *, /, %, <<, >>, >>>, &, |, ^的操作对象。
  // 若常数枚举表达式求值后为 NaN或 Infinity，则会在编译阶段报错。
  enum FileAccess {
    // constant members
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    // computed member
    G = "123".length
  }
})();



