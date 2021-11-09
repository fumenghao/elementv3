<template>
  <div class="pagetags_container">
    <div class="left_button_container">
      <div v-for="(item, index) in routerList" :key="index" class="tag_button">
        {{ item.name }} <i class="el-icon-close"></i>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  setup(props) {
    const routerList = [
      {
        name: "表格",
        link: "table",
      },
    ];
    return {
      routerList,
    };
  },
});
</script>

<style lang="scss" scoped>
.pagetags_container {
  width: 100%;
  .left_button_container {
    width: 100%;
    &::after {
      content: "";
      display: block;
      clear: both;
    }
  }
  .tag_button {
    border: 1px solid #dddddd;
    float: left;
    width: auto;
    padding: 2px 4px;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background: blue;
      border-color: blue;
    }
  }
}
</style>