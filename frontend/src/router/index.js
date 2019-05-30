import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import SignUp from '@/components/SignUp'
import FindUserInfo from '@/components/FindUserInfo'
import Login from '@/components/Login'
import ListPage from '@/components/ListPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/finduserinfo',
      name: 'FindUserInfo',
      component: FindUserInfo
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/listpage',
      name: 'ListPage',
      component: ListPage
    }
  ]
})
