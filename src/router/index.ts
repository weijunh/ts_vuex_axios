import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
    /* base也比较好理解，代表着是基本的路由请求的路径。参考 ：
    如：
    base: '/app/'
    那么所有的请求都会在url之后加上/app/
    应用的基路径。例如，如果整个单页应用服务在 /app/ 下，然后 base 就应该设为 "/app/" */
})

export default router
