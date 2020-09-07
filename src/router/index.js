import Vue from 'vue'
import VueRouter from 'vue-router'
import About from "../views/User/About.vue"
import Admin from '../views/Admin/Admin.vue'
import Dashboard from "../views/User/Dashboard.vue"
import EditPost from "../views/Admin/EditPost.vue"
import NewPost from "../views/Admin/NewPost.vue"
import ViewPost from "../views/User/ViewPost.vue"
import Login from "../views/User/Login.vue"
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
    component: About
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router