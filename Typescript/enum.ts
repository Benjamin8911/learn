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
(function(){
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
(function(){
  enum Direction {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
  }
})()