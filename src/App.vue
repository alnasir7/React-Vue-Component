<template>
  <div id="app">
    <ROICalc/>
  </div>
</template>

<script>
import { VuePlugin } from 'vuera'
import ROICalc from "./components/react/ROICalc"
import Vue from "vue"

Vue.use(VuePlugin)

export default {
  name: 'App',
  components: {
    ROICalc
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
