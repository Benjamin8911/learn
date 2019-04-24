// 模块
// 模块在其自身的作用域里执行，而不是在全局作用域里；
// 这意味着定义在一个模块里的变量，函数，类等等在模块外部是不可见的，除非你明确地使用export形式之一导出它们。
// 相反，如果想使用其它模块导出的变量，函数，类，接口等的时候，你必须要导入它们，可以使用 import形式之一。
// 模块是自声明的；两个模块之间的关系是通过在文件级别上使用imports和exports建立的。

// TypeScript与ECMAScript 2015一样，任何包含顶级import或者export的文件都被当成一个模块。
// 相反地，如果一个文件不带有顶级的import或者export声明，那么它的内容被视为全局可见的（因此对模块也是可见的）。
