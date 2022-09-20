<template>
  <div id="app">
    <FormDesign />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import FormDesign from "@/views/admin/layout/FormDesign";

export default {
  name: "App",
  components: {
    // HelloWorld,
    FormDesign,
  },
};
</script>

<style lang="less">
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  // margin-top: 60px;
}
ul {
  padding: 0;
  margin: 0;
}
</style>
