import Vue from 'vue'
import Router from 'vue-router'
import index from './items/index.vue'//主页
import category from './items/Category.vue'//分类
import Rank from './items/Rank.vue'//排行榜
import Bookshelf from './items/Bookshelf.vue'//书架
import Category_view from './items/Category_view.vue'//分类点击后的列表
import Section from './items/Section.vue'//章节
import EssayPage from './items/EssayPage.vue'//阅读页
import Regist from './items/Regist.vue'//注册
import details from './items/details/details.vue'//详情页
import navseek from './items/navseek/Navseek.vue'//搜索页
import login from './items/login/Login.vue'//登录页
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {path:'/category',component:category},
    {path:'/rank',component:Rank},
    {path:'/bookshelf',component:Bookshelf},
    {path:'/Category_view',component:Category_view},
    {path:'/section',component:Section},
    {path:'/EssayPage',component:EssayPage},
    {path:'/regist',component:Regist},
    {path:'/details',component:details},
    {path:'/navseek',component:navseek},
    {path:'/login',component:login},
  ]
})
