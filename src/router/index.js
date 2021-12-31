import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import QuickQuestion from "../views/QuickQuestion.vue";
import LoginFromNewDevice from "../views/LoginFromNewDevice.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/quickquestion",
    name: "QuickQuestion",
    component: QuickQuestion,
  },
  {
    path: "/loginfromnewdevice",
    name: "LoginFromNewDevice",
    component: LoginFromNewDevice,
  },
];

const router = new VueRouter({
  routes,
});

export default router;