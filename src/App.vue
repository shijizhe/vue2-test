<template>
  <div id="app">
    <MainTest msg="Father"/>
  </div>
</template>

<script>
import MainTest from './components/MainTest.vue'

export default {
  name: 'App',
  components: {
    MainTest
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
