import Vue from "vue";
import VueRouter from "vue-router";
import VueCompositionApi from "@vue/composition-api";
//Routes
import About from "../views/User/About.vue";
import Admin from "../views/Admin/Admin.vue";
import Blog from "../views/User/Blog.vue";
import Dashboard from "../views/User/Dashboard.vue";
import EditPost from "../views/Admin/EditPost.vue";
import NewPost from "../views/Admin/NewPost.vue";
import ViewPost from "../views/User/ViewPost.vue";
import Login from "../views/User/Login.vue";
import Error from "../views/User/404.vue";
// Store
import store from "../store/index";
import {
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
Vue.use(VueRouter);

const user = store.state.auth.user;
console.log(user)
const routes = [{
    path: "/",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/blogs",
    name: "blogs",
    component: Blog,
  },
  {
    path: "*",
    name: "error",
    component: Error,
  },
  {
    //Added :post_id so you can edit the specific post
    path: "/admin/edit-post/:id",
    name: "edit-post",
    component: EditPost,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/admin/new-post",
    name: "new-post",
    component: NewPost,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/view-post/:title",
    name: "view-post",
    component: ViewPost,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin,
    meta: {
      requiresAuth: true,
    },
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,

  scrollBehavior: function (to) {
    if (to.hash) {
      return {
        selector: to.hash
      };
    } else return {
      x: 0,
      y: 0
    }
  },
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = store.state.auth.authenticated
  if (requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router;