<template>
  <div class="header_container">
    <div class="control">
      <div class="left_button">
        <el-icon
          @click="clickMenuBtn"
          v-show="!$store.state.openMenu"
          class="expand_btn"
        >
          <Expand />
        </el-icon>
        <el-icon
          @click="clickMenuBtn"
          v-show="$store.state.openMenu"
          class="expand_btn"
        >
          <Fold />
        </el-icon>
      </div>
      <div class="right_button"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Expand, Fold } from "@element-plus/icons";
import { useStore } from "vuex";
export default defineComponent({
  components: { Expand, Fold },
  setup() {
    const store = useStore();
    function clickMenuBtn() {
      store.commit("setOpenMenu", !store.state.openMenu);
    }
    return { clickMenuBtn };
  },
});
</script>

<style lang='scss' scoped>
.header_container {
  width: 100%;
  height: 60px;
  background: #303030;
  .expand_btn {
    color: #ffffff;
    font-size: 24px;
  }
  .control {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding-left: 20px;
  }
}
</style>