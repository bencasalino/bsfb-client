import Vue from 'vue'
import Router from 'vue-router'
import Table from '@/components/Table'
import HOF from '@/components/HOF'
import Rules from '@/components/Rules'

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
    {
      path: '/Rules',
      name: 'Rules',
      component: Rules
    },
  ]
})
