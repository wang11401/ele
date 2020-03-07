import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { 
    path: '/', 
    redirect: '/goods'
  },
  { 
    path: '/goods', 
    component: () => import("components/goods/Goods")
  },
  { 
    path: '/seller', 
    component: () => import("components/seller/Seller")
  },
  { 
    path: '/ratings', 
    component: () => import("components/ratings/Ratings")
  }
]

const router = new VueRouter({
  routes
})

export default router
