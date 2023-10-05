import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Layout from "@/components/layout/Layout.vue";
import SmartphoneView from "@/views/SmartphoneView.vue";

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'all-products',
      component: Layout,
      children: [
        {
          path: '/home',
          alias: '/',
          component: HomeView
        },
        {
          path: '/smartphones',
          name: 'smartphones',
          component: SmartphoneView
        },
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/AboutView.vue')
        }
      ]
    },
  ]
})

export default router
