<template>
  <div id="app">
    <VxeTest></VxeTest>
  </div>
</template>

<script>
import VxeTest from "@/components/VxeTest";

export default {
  name: 'App',
  components: {
    VxeTest
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
