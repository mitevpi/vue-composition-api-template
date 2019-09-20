<template>
  <div class="home">
    <Counter msg="Welcome to Your Vue.js Functional API App" />
  </div>
</template>

<script>
import Counter from "../components/Counter.vue";

export default {
  name: "Home",
  components: {
    Counter
  }
};
</script>
