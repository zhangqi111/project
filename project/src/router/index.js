import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import register from '@/components/register'
import login from '@/components/login'
import resetPwd from '@/components/resetPwd'
import search from '@/components/search'
import type from '@/components/type'
import list from '@/components/list'
import detailist from '@/components/detailist'
import index from '@/components/index'
import menu from '@/components/menu'
import buzhou from '@/components/buzhou'

Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',
      name: 'index',
      component: index
    },
    {
    	path: '/menu',
    	name: 'menu',
    	component: menu
    },
    {
    	path:'/buzhou',
    	name:'buzhou',
    	component: buzhou
    },
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
    	path: '/register',
    	name: 'register',
    	component: register
    },
    {
    	path: '/login',
    	name: 'login',
    	component: login
    },
    {
    	path: '/resetPwd',
			name: 'resetPwd',
			component: resetPwd
    },
    {
    	path: '/search',
    	name: 'search',
    	component: search
    },
    {
    	path: '/type',
    	name: 'type',
    	component: type
    },
    {
    	path: '/detailist',
    	name: 'detailist',
    	component: detailist
    },
    {
    	path: '/list',
    	name: 'list',
    	component: list
    }
  ]
})
