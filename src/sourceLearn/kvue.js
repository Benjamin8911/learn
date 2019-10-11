class Kvue {
  constructor(options) {
    this.$options = options
    this.$data = options.data
    // 数据响应化
    this.observe(this.$data)

    //
    new Compile(options.el, this)
    // created执行
    if (options.created) {
      options.created.call(this)
    }
  }
  observe(obj) {
    if (!obj || typeof obj !== 'object') {
      return
    }
    // 遍历该对象($data)
    Object.keys(obj).forEach(key => {
      this.defineReactive(obj, key, obj[key])
      // 代理data中的属性到vue实例上
      this.proxyData(key)
    })
  }
  // 数据响应化
  defineReactive(obj, key, val) {
    this.observe(val)

    const dep = new Dep()

    Object.defineProperty(obj, key, {
      get() {
        Dep.target && dep.addDep(Dep.target)
        return val
      },
      set(newVal) {
        if (newVal === val) {
          return
        }
        val = newVal
        console.log(`${key}数据更新为：${val}`)
        dep.notify()
      }
    })
  }

  // 代理vm
  proxyData(key) {
    Object.defineProperty(this, key, {
      get() {
        return this.$data[key]
      },
      set(newVal) {
        this.$data[key] = newVal
      }
    })
  }
}
// 用来管理watcher
class Dep {
  constructor() {
    this.deps = []
  }

  addDep(dep) {
    this.deps.push(dep)
  }

  notify() {
    this.deps.forEach(dep => {
      dep.update()
    })
  }
}

class Watcher {
  constructor(vm, key, cb) {
    this.vm = vm
    this.key = key
    this.cb = cb
    // 将当前watcher实例指定到Dep静态属性target
    Dep.target = this
    // 触发get，添加依赖
    this.vm[this.key]
    // 置空
    Dep.target = null
  }

  update() {
    // console.log('属性更新了')
    this.cb.call(this.vm, this.vm[this.key])
  }
}
