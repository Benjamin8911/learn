// 用法 new Compile(el, vm)
class Compile {
  constructor(el, vm) {
    // 要遍历的宿主节点
    this.$el = document.querySelector(el)
    this.$vm = vm

    // 开始编译
    if (this.$el) {
      // 先拿去片段，避免DOM操作，转换内部的内容为片段fragment
      this.$fragment = this.node2Fragment(this.$el)
      // 执行编译
      this.compile(this.$fragment)
      // 将编译后的结果追加至$el
      this.$el.appendChild(this.$fragment)
    }
  }

  // 将宿主元素中的代码片段拿出来遍历，比较高效
  node2Fragment(el) {
    const frag = document.createDocumentFragment()
    // 将el中所有子元素搬家至frag中
    let child
    while(child = el.firstChild) {
      frag.appendChild(child)
    }
    return frag
  }
  // 编译过程
  compile(el){
    const childNodes = el.childNodes
    Array.from(childNodes).forEach(node => {
      // 类型判断
      if (this.isElement(node)) {
        // 元素
        // console.log('编译元素' + node.nodeName)
        // 查找k-, @, :
        const nodeAttrs = node.attributes
        Array.from(nodeAttrs).forEach(attr => {
          // 属性名
          const attrName = attr.name
          // 属性值
          const exp = attr.value
          // 判断是否为指令
          if (this.isDirective(attrName)) {
            const dir = attrName.substring(2)
            // 执行指令
            this[dir] && this[dir](node, this.$vm, exp)
          }
          if (this.isEvent(attrName)) {
            console.log('123')
          }
        })
      } else if (this.isInterpolation(node)) {
        // 文本
        // console.log('编译插值文本' + node.textContent)
        this.compileText(node)
      }

      // 递归子节点
      if (node.childNodes && node.childNodes.length > 0) {
        this.compile(node)
      }
    })
  }

  compileText(node) {
    // console.log(RegExp.$1)
    this.update(node, this.$vm, RegExp.$1, 'text')
  }

  // 更新函数，根据指令决定使用哪种更新器
  // 参数：更新节点，实例，表达式(属性名)，指令
  update(node, vm, exp, dir) {
    // 从当前类组合一个更新器的函数名
    const updaterFn = this[dir + 'Updater']
    // 初始化
    updaterFn && updaterFn(node, vm[exp])
    // 依赖收集
    new Watcher(vm, exp, function(value) {
      updaterFn && updaterFn(node, value)
    })
  }

  text(node, vm, exp) {
    this.update(node, vm, exp, 'text')
  }

  textUpdater(node, value) {
    node.textContent = value
  }

  isDirective(attr) {
    return attr.indexOf('k-') == 0
  }

  isEvent(attr) {
    return attr.indexOf('@') == 0
  }

  isElement(node) {
    return node.nodeType === 1
  }
  // 插值文本
  isInterpolation(node) {
    return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent)
  }
}
