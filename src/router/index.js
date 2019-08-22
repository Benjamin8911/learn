import Vue from 'vue'
import Router from 'vue-router'
const Hello = () => import('@/components/Hello')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Hello
    }
  ]
})
