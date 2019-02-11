<template>
  <div id="app">
    <Dashboard />
  </div>
</template>

<script>
import Dashboard from './components/dashboard.vue'

export default {
  name: 'app',
  components: {
    Dashboard
  }
}
</script>

<style>
html {
  margin: 0;
  font-family: 'Saira', Helvetica, Arial, sans-serif;
  font-size: 18px;
  background-color: #eee;
  color: #333;
}
body {
  margin: 0;
}
* {
  box-sizing: border-box;
}
</style>
