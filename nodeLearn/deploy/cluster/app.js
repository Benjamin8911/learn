const Koa = require('koa')
const app = new Koa()
app.use(async (ctx,next) => {
  Math.random() > 0.9 ? aaa() : null
  await next()
  ctx.body = 'Hello World'
})

if(!module.parent){
  app.listen(3000, () => {
    console.log('app start at 3000')
  })
} else {
  module.exports = app
}

