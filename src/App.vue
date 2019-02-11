<template>
      <router-view></router-view>
</template>

<script>
import home from "./components/home.vue";
export default {
  name: "App",
  components: {
    home
  },
  data() {
    return {};
  }
};
</script>

<style>
html{
  background-color: #303030;
}
</style>
