//  类
(function () {
  class Greeter {
    greeting: string
    constructor(message: string) {
      this.greeting = message
    }
    greet() {
      return 'Hello' + this.greeting
    }
  }
  let greeter = new Greeter('world')
})();

//  继承
(function () {
  class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
      console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
  }

  class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
      console.log("Slithering...");
      super.move(distanceInMeters);
    }
  }

  class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
      console.log("Galloping...");
      super.move(distanceInMeters);
    }
  }

  let sam = new Snake("Sammy the Python");
  let tom: Animal = new Horse("Tommy the Palomino");

  sam.move();
  tom.move(34);
})();

//  公共，私有与受保护的修饰符
//  理解 private
//  当成员被标记成 private时，它就不能在声明它的类的外部访问
(function () {
  class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
  }

  class Rhino extends Animal {
    constructor() { super("Rhino"); }
  }

  class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }
  }

  let animal = new Animal("Goat");
  let rhino = new Rhino();
  let employee = new Employee("Bob");

  animal = rhino;
  // 错误: Animal 与 Employee 不兼容.
  // animal = employee; 
})();

//  理解 protected
class Person {
  protected name: string;
  protected constructor(theName: string) { this.name = theName; }
}

// EmployeeA 能够继承 Person
class EmployeeA extends Person {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new EmployeeA("Howard", "Sales");
console.log(howard.getElevatorPitch());
// 错误: 'Person' 的构造函数是被保护的. 
// let john = new Person("John"); 
// 错误
// console.log(howard.name); 

// readonly修饰符
class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor(theName: string) {
    this.name = theName;
  }
}
let dad = new Octopus("Man with the 8 strong legs");
// 错误! name 是只读的
// dad.name = "Man with the 3-piece suit"; 

// 存取器
(function () {
  let passcode = "secret passcode";

  class Employee {
    private _fullName: string;

    get fullName(): string {
      return this._fullName;
    }

    set fullName(newName: string) {
      if (passcode && passcode == "secret passcode") {
        this._fullName = newName;
      }
      else {
        console.log("Error: Unauthorized update of employee!");
      }
    }
  }

  let employee = new Employee();
  employee.fullName = "Bob Smith";
  if (employee.fullName) {
    alert(employee.fullName);
  }
})();

// 静态属性
(function () {
  class Grid {
    static origin = { x: 0, y: 0 };
    calculateDistanceFromOrigin(point: { x: number; y: number; }) {
      let xDist = (point.x - Grid.origin.x);
      let yDist = (point.y - Grid.origin.y);
      return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor(public scale: number) { }
  }

  let grid1 = new Grid(1.0);  // 1x scale
  let grid2 = new Grid(5.0);  // 5x scale

  console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
  console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
})();

// 抽象类
// 抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。 
// 不同于接口，抽象类可以包含成员的实现细节。 
// abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法。

// 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。 
// 抽象方法的语法与接口方法相似。 两者都是定义方法签名但不包含方法体。 
// 然而，抽象方法必须包含 abstract关键字并且可以包含访问修饰符。
(function () {
  abstract class Department {

    constructor(public name: string) {
    }

    printName(): void {
      console.log('Department name: ' + this.name);
    }

    abstract printMeeting(): void; // 必须在派生类中实现
  }

  class AccountingDepartment extends Department {

    constructor() {
      super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
    }

    printMeeting(): void {
      console.log('The Accounting Department meets each Monday at 10am.');
    }

    generateReports(): void {
      console.log('Generating accounting reports...');
    }
  }

  let department: Department; // 允许创建一个对抽象类型的引用
  // 错误: 不能创建一个抽象类的实例
  // department = new Department();
  department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
  department.printName();
  department.printMeeting();
  // 错误: 方法在声明的抽象类中不存在
  // department.generateReports();
})();