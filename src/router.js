import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "counter",
      component: () => import("./views/Home.vue")
    },
    {
      path: "/counter-vuex",
      name: "counter-vuex",
      component: () => import("./components/CounterVuex.vue")
    },
    {
      path: "/counter-vuex-hooks",
      name: "counter-vuex-hooks",
      component: () => import("./components/CounterVuexHooks.vue")
    }
  ]
});
