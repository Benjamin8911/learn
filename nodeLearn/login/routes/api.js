const Router = require("koa-router")
const captcha = require("trek-captcha");
const router = new Router({
  prefix: '/api'
})

router.get("/", ctx => {
  ctx.body = "index"
});
router.get("/captcha", async ctx => {
const { token, buffer } = await captcha({ size: 4 });
  ctx.session.captcha = token
  ctx.body = buffer;
});

module.exports = router
