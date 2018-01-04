import Vue from 'vue'
import Router from 'vue-router'
import Index from "components/index/index"
import Category from 'components/category/category'
import Cart from 'components/cart/cart'
import Own from 'components/own/own'
import Brands from 'components/brands/brands'
import Search from 'components/search/search'
import Login from 'components/login/login'
import Register from 'components/register/register'
import Register_before from 'components/register_before/register_before'
import Detail from 'components/detail/detail'
import Brandsall from 'components/brandsall/brandsall'
import Shop_list from 'components/shop_list/shop_list'
Vue.use(Router)
export default new Router({
  base: '/dist/',
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
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/own',
      component: Own
    },
    {
      path: '/brands',
      component: Brands
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register_before',
      component: Register_before
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/detail',
      component: Detail
    },
    {
      path: '/shop_list',
      component: Shop_list
    },
    {
      path: '/brandsall',
      component: Brandsall
    }
  ]
})
