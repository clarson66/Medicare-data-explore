import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import HospCompliDeaths from '@/components/HospCompliDeaths'
import HospInfections from '@/components/HospInfections'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/deaths',
      name: 'HospCompliDeaths',
      component: HospCompliDeaths
    },
    {
      path: '/infections',
      name: 'HospInfections',
      component: HospInfections
    }
  ]
})
