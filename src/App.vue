<template>
  <router-view></router-view>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import pageAside from "@/components/layout/pageAside.vue";
import pageHeader from "@/components/layout/pageHeader.vue";
import bread from "@/components/layout/bread.vue";
@Options({
  components: {
    HelloWorld,
    pageAside,
    pageHeader,
    bread,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
