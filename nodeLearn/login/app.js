const Koa = require('koa')
const path = require('path')
const bodyParser = require('koa-bodyparser')
const session = require('koa-session')
const cors = require('koa2-cors')
const redisStore = require('koa-redis')
const redis = require('redis')
const staticResource = require("koa-static")
const bouncer = require('koa-bouncer')
const redisClient = redis.createClient(6379, 'localhost')
const index = require('./routes/index')
const users = require('./routes/users')
const api = require('./routes/api')
const app = new Koa()
app.use(bodyParser())
app.use(cors())
app.use(bouncer.middleware())

const wrapper = require('co-redis')
const client = wrapper(redisClient)

app.keys = ['some secret']
const SESS_CONFIG = {
  key: 'session',
  maxAge: 8640000,
  httpOnly: true,
  signed: true,
  store: redisStore({
    client
  })
}
app.use(session(SESS_CONFIG, app))
app.use(staticResource(
  path.join(__dirname , './views')
))
app.use(index.routes())
app.use(users.routes())
app.use(api.routes())

app.use(ctx => {
  // 查看redis
  redisClient.keys('*', (err, keys) => {
    console.log(keys)
    keys.forEach(key => {
      redisClient.get(key, (err, val) => {
        console.log(val)
      })
    })
  })

//   if (ctx.path === '/favicon.ico') return
//   let n = ctx.session.count || 0
//   ctx.session.count = ++n
//   ctx.body = `第${n}次访问`
})
app.listen(3000)
