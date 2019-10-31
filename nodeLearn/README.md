# node实践

## JWT(JSON Web Token)原理

> Bearar Token 包括令牌头，载荷，哈希

1. 签名：默认使用base64对payload编码，使用HS256算法对令牌头、payload和秘钥进行签名生成哈希

2. 验证：默认使用HS256算法对令牌中数据签名并将结果和令牌中的哈希比对

> koa2-cors
>
> koa-multer
>
> koa-bouncer
>
> trek-captcha 图形验证码
