# 路由

所有跟路由相关的知识汇总

## location

表示URL对象

参考地址：<https://developer.mozilla.org/zh-CN/docs/Web/API/Location>

### location.href

包含整个URL的DOMString

例如：<https://developer.mozilla.org/zh-CN/docs/Web/API/Location>

### location.protocol

包含URL对应协议的DOMString，最有有一个:

例如：https:

### location.host

包含URL域名的DOMString，及包含hostname和port

例如：developer.mozilla.org，可能有:端口号，但必须是显式的包含才有端口号的显示

### location.hostname

包含URL域名的DOMString

例如：developer.mozilla.org

### location.port

包含端口号的DOMString，如果URL没有显式的包含端口号，则显示为''

例如：8080

### location.pathname

包含URL中路径部分的DOMString，开头有/

例如：/zh-CN/docs/Web/API/Location

### location.search

包含URL参数的DOMString，开头有?

例如：?a=123&c=321

### location.hash

包含块标识符的DOMString，开头有#

例如：#hash?123$321aa

### location.origin

包含页面来源的域名的标准形式DOMString

例如：<https://developer.mozilla.org>
