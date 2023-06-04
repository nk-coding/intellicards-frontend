import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/chapter/:chapter",
      name: "Chapter",
      component: () => import("@/views/ChapterView.vue"),
    },
  ],
});
