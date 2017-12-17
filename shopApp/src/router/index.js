import Vue from 'vue'
import Router from 'vue-router'
import Index from "components/index/index"
import Category from 'components/category/category'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: "/index",
      component: Index
    },
    {
      path: '/category',
      component: Category
    }
  ]
})
