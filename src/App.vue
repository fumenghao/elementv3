<template>
  <el-container>
    <el-aside class="aside" width="auto">
      <pageAside/>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import pageAside from '@/components/layout/pageAside.vue'
@Options({
  components: {
    HelloWorld,pageAside
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
