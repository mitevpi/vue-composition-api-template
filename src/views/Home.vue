<template>
  <div class="home">
    <Counter msg="Welcome to Your Vue.js Functional API App" />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    Counter: () => import("../components/Counter.vue")
  }
};
</script>
