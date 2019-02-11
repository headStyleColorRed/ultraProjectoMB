import Vue from 'vue'
import Router from 'vue-router'
import landing from '@/components/landing'
import firstLanding from '@/components/firstLanding'
import programacion from '@/components/programacion'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/landing',
      name: 'landing',
      component: landing
    },
    {
      path: '/',
      name: 'firstLanding',
      component: firstLanding
    },
    {
      path: '/programacion',
      name: 'programacion',
      component: programacion
    },
    {
      path: '*',
      name: 'firstLanding',
      component: firstLanding
    },
  ]
})
