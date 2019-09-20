<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Counter</router-link> |
      <router-link to="/counter-vuex">Counter Vuex</router-link> |
      <router-link to="/counter-vuex-hooks">Counter Vuex + Hooks</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.myButton {
  margin: 5px 5px 5px 5px;
  background-color: #44c767;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  border: 1px solid #18ab29;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 14px;
  padding: 10px 20px;
  text-decoration: none;
}
.myButton:hover {
  background-color: #5cbf2a;
}
.myButton:active {
  position: relative;
  top: 1px;
}
</style>
