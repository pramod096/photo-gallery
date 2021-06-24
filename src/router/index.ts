import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import  Tabs from "../views/Tabs.vue";
import  Login from "../views/Login.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path:'/login',
    name:'login',
    component: Login
  },
  {
    path: "/tabs/",
    component: Tabs,
    children: [
      {
        path: "",
        redirect: "/tabs/tab1",
      },
      {
        path: "tab1",
        component: () => import("@/views/Tab1.vue"),
      },
      {
        path: "/tabs/tab2",
        component: () => import("@/views/Tab2.vue"),
      },
      {
        path: "/ReportDetails",
        name: "reportDetails",
        component: () => import("@/components/reportDetails.vue"),
      },
      {
        path: "/ReportDetailsAdmin",
        name: "reportDetailsAdmin",
        component: () => import("@/components/reportDetailsAdmin.vue"),
      },
      {
        path: "/Admin",
        component: () => import("@/views/Admin.vue"),
      },
      {
        path: "/CommitteeManage",
        name: "committeeManage",
        component: () => import("@/views/CommitteeManage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
