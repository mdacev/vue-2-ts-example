import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import StockTicker from '../views/stock/StockTicker.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/stock',
    alias: '/',
    name: 'StockTicker',
    component: StockTicker
  },
  {
    path: '/trade',
    name: 'Trade',
    component: () => import(/* webpackChunkName: "trade" */ '../views/trade/Trade.vue')
  },
  {
    path: '/chart',
    name: 'ChartTicker',
    component: () => import(/* webpackChunkName: "chart" */ '../views/chart/ChartTicker.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
