<template>
  <div>
    <!-- <index></index> -->
    <RouterView></RouterView>
    <!-- <About></About> -->
  </div>
</template>

<script >
// import index from "./components/index.vue"
import { RouterView } from "vue-router";
// import About from "./components/About.vue";
export default {
data(){
  return {
  }
},
components:{

RouterView,
// About,
}
}
</script>

<style>

</style>