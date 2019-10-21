//  use:['xx1-loader', 'xx2-loader']
//  map, meta 为后两个参数
module.exports = function (content) {
  console.log('loader')
  return content + this.data.valut
}
//  前置钩子
module.exports.pitch = function (remainRequest, preRequest, data) {
  data.value = '123'
}
//  前置钩子执行顺序
//  xx1-loader -> pitch
//  xx2-loader -> pitch
//  xx2
//  xx1