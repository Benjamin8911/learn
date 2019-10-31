const Router = require('koa-router')
const jwt = require('jsonwebtoken')
const jwtAuth = require('koa-jwt')
const multer = require('koa-multer')
const bouncer = require('koa-bouncer')
const secret = 'secret'
const upload = multer({
  dest: './public/images'
})

const validator = async (ctx, next) => {
  try {
    ctx.validateBody('username')
      .required('要求提供用户名')
      .isString().trim()
      .isLength(6, 16, '用户长度应该为6-16')
    console.log('ctx.vals', ctx.vals)
    next()
  } catch (error) {
    if (error instanceof bouncer.ValidationError) {
      ctx.body = '校验错误' + error.message
      return
    }
    throw error
  }
}

const router = new Router({
  prefix: '/users'
});

router.get("/", ctx => {
  ctx.body = "users list"
});

// session方式
router.post('/login', async ctx => {
  const {
    body
  } = ctx.request
  ctx.session.userinfo = body.username
  ctx.body = {
    ok: 1,
    message: '登录成功'
  }
})

router.post('/logout', async ctx => {
  delete ctx.session.userinfo
  ctx.body = {
    ok: 1,
    message: '退出成功'
  }
})

router.get('/getUser', require('../middleware/auth'), async ctx => {
  ctx.body = {
    ok: 1,
    message: '获取成功',
    userinfo: ctx.session.userinfo
  }
})

// token方式
router.post('/loginToken', validator, async ctx => {
  const {
    body
  } = ctx.request
  const username = body.username
  ctx.body = {
    ok: 1,
    message: '登陆成功',
    user: username,
    token: jwt.sign({
      data: username,
      exp: Math.floor(Date.now() / 1000) + 60 * 60
    }, secret)
  }
})

router.get('/getUserToken', jwtAuth({
  secret
}), async ctx => {
  console.log('state', ctx.state)
  ctx.body = {
    ok: 1,
    message: '获取信息成功'
  }
})

router.post('/upload', upload.single('file'), ctx => {
  console.log('file', ctx.req.file)
  console.log('body', ctx.req.body)
  ctx.body = '上传成功'
})

module.exports = router
