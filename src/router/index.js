import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import QuickQuestion from "../views/QuickQuestion.vue";
import LoginFromNewDevice from "../views/LoginFromNewDevice.vue";
import ConvertOTCPortal from "../views/ConvertOTCPortal.vue";
import PaymentMethod from "../views/PaymentMethod.vue";
import KYCVerification from "../views/KYCVerification.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/loginfromnewdevice",
    name: "LoginFromNewDevice",
    component: LoginFromNewDevice,
  },
  {
    path: "/convertotcportal",
    name: "ConvertOTCPortal",
    component: ConvertOTCPortal,
  },
  {
    path: "/paymentmethod",
    name: "PaymentMethod",
    component: PaymentMethod,
  },
  {
    path: "/quickquestion",
    name: "QuickQuestion",
    component: QuickQuestion,
  },
  {
    path: "/kyc-verification",
    name: "KYCVerification",
    component: KYCVerification,
  },
];

const router = new VueRouter({
  routes,
});

export default router;