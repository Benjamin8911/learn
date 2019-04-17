//  基础类型
//  boolean
let isDone:boolean = true

//  number
let width:number = 10

//  string
let student:string = 'Benjamin'

// array
let array1:number[] = [1, 2, 3]
let array2:Array<number> = [1, 2, 3]
let array3:any[] = [1, true]

//  tuple
//  元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
let tuple1:[string,number]

//  any
let any1:any = 4
any1 = 'string'
any1 = false

//  void
//  当一个函数没有返回值时，你通常会见到其返回值类型是 void
function warnUser():void {
  console.log('This is message')
}

//  never
function error(message:string):never {
  throw new Error(message)
}

//  object


//  类型断言
let someValue: any = 'this is a string'
let strlen1: number = (<string>someValue).length
let strlen2: number = (someValue as string).length


//  接口
//  可选属性
interface SquareConfig {
  color?: string
  width?: number
  [propName: string]: any
}

function createSquare(config: SquareConfig): {color: string; area: number} {
  let newSquare = {color: "white", area: 100};
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({color: "black", someProp: 'prop'});

//  只读属性
interface Point {
  readonly x:number
  readonly y:number
  readonly z?:number
}

let p1:Point = {
  x: 50,
  y: 20
}

//  函数类型
//  接口能够描述JavaScript中对象拥有的各种各样的外形。 
//  除了描述带有属性的普通对象外，接口也可以描述函数类型。
//  为了使用接口表示函数类型，我们需要给接口定义一个调用签名。 
//  它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。
interface SearchFunc {
  (source: string, subString: string): boolean
}

let mySearch: SearchFunc = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
}

//  可索引类型
//  可以将索引签名设置为只读，这样就防止了给索引赋值
interface ReadonlyStringArray {
  readonly [index: number]: string;
}
let myArray: ReadonlyStringArray = ["Alice", "Bob"];