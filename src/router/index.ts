import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import Home from "~/view/Home.vue"
import Examples from "~/view/Examples.vue"
import Animations from "~/view/Animations.vue"
import Layout from "~/view/Layout.vue"
import IRweb from "~/view/IR-web.vue"
// import Worship from "~/view/Worship.vue"

export const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/examples', name: 'Examples', component: Examples},
  {path: '/animations', name: 'Animations', component: Animations},
  {path: '/layout', name: 'Layout', component: Layout},
  {path: '/irweb', name: 'IR-web', component: IRweb},
  // {path: '/worship', name: 'Worship', component: Worship},
]

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes
})

export default router