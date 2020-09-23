import Vue from "vue";
import VueRouter from "vue-router";
import VueCompositionApi from "@vue/composition-api";
//Routes
import About from "../views/User/About.vue";
import Admin from "../views/Admin/Admin.vue";
import Dashboard from "../views/User/Dashboard.vue";
import EditPost from "../views/Admin/EditPost.vue";
import NewPost from "../views/Admin/NewPost.vue";
import ViewPost from "../views/User/ViewPost.vue";
import Login from "../views/User/Login.vue";
import Error from "../views/User/404.vue";
// Store
import useAuth from "../store/modules/auth";
import { reactive } from "@vue/composition-api";
Vue.use(VueCompositionApi);
Vue.use(VueRouter);

let auth = reactive(useAuth().authenticated);
console.log(auth);
const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "*",
    name: "error",
    component: Error,
  },
  {
    //Added :post_id so you can edit the specific post
    path: "/admin/edit-post/:title",
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
// console.log(useAuth().authenticated);
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth) && !auth) {
    next("/login");
  } else {
    next();
  }
});

export default router;
