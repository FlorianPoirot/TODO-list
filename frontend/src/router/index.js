import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import addTodo from '@/components/addTodo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/add',
      name: 'addTodo',
      component: addTodo
    }
  ]
})
