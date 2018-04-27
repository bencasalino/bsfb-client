import Vue from 'vue'
import Router from 'vue-router'
import Table from '@/components/Table'
import HOF from '@/components/HOF'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Table',
      component: Table
    },
    {
      path: '/HOF',
      name: 'HOF',
      component: HOF
    },
  ]
})
