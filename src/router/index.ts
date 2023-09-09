import { createRouter, createWebHistory } from "vue-router";
import Login from "../pages/Login.vue";
import Todo from "../pages/Todo.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/todo",
    name: "todo",
    component: Todo,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
