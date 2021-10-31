<template>
  <el-container>
    <el-aside class="aside" width="auto">
      <pageAside />
    </el-aside>
    <el-container>
      <el-header height="auto" style="padding: 0"><pageHeader /></el-header>
      <el-main style="padding: 15px">
        <bread />
        <router-view style="margin-top: 15px"></router-view>
      </el-main>
    </el-container>
  </el-container>
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
