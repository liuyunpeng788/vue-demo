import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Home from '@/components/Home'
// lazy import
const HelloWorld = () => import('@/components/HelloWorld')
const Home = () => import('@/components/Home')

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 设置默认页面
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [{
        path: 'news',
        name: 'news',
        // lazy load
        component: () => import('@/components/SubHomeNews')
      },
      {
        path: 'test',
        // lazy load
        component: () => import('@/components/SubHomeTest')
      }
      ]
    },
    {
      path: '/hello-world',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ],
  // 统一设置活跃link标签的样式
  linkActiveClass: 'active'

})
