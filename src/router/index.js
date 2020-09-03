import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from "../views/Dashboard.vue"
import EditPost from "../views/EditPost.vue"
import NewPost from "../views/NewPost.vue"
import ViewPost from "../views/ViewPost.vue"
Vue.use(VueRouter)
const routes = [{
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  { //Added :post_id so you can edit the specific post
    path: '/edit-post/:post_id',
    name: 'edit-post',
    component: EditPost
  },
  {
    path: '/new-post',
    name: 'new-post',
    component: NewPost
  },
  {
    path: '/view-post/:post_id',
    name: 'view-post',
    component: ViewPost
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import( /* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router