import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "counter",
      component: Home
    },
    {
      path: "/counter-vuex",
      name: "counter-vuex",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/CounterVuex.vue")
    }
  ]
});
