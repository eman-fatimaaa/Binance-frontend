import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import KYC from "../views/KYC.vue";
import Registration from "../views/Registration.vue";
import Login from "../views/Login.vue";
import ConfirmDevice from "../views/ConfirmDevice.vue";
import MarketTrend from "../views/MarketTrend.vue";
import Portal from "../views/Portal.vue";
import Deposit from "../views/Deposit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/registration",
    name: "Registration",
    component: Registration,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/confirmdevice",
    name: "confirmdevice",
    component: ConfirmDevice,
  },
  {
    path: "/markettrend",
    name: "markettrend",
    component: MarketTrend,
  },
  {
    path: "/kyc",
    name: "kyc",
    component: KYC,
  },
  {
    path: "/portal",
    name: "portal",
    component: Portal,
  },
  {
    path: "/deposit",
    name: "deposit",
    component: Deposit,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
