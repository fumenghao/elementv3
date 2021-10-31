<template>
  <div class="aside_container">
    <!-- @open="handleOpen"
        @close="handleClose" -->
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="2"
      :collapse="!$store.state.openMenu"
      text-color="#fff"
      mode="vertical"
    >
      <!-- <el-sub-menu index="1">
        <template #title>
          <i class="el-icon-location"></i>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group>
          <el-menu-item>item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title>item four</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu> -->
      <el-menu-item
        v-for="(item, index) in menuList"
        :key="index"
        @click="clickMenu(item)"
        :index="item.label"
      >
        <i class="iconfont" :class="item.icon"></i>
        <span class="menu_title">{{ item.name }}</span>
      </el-menu-item>
      <!-- <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span>设置</span>
      </el-menu-item>
      <el-menu-item @click="clickMenu" index="5">
        <i class="el-icon-setting"></i>
        <span>表格</span>
      </el-menu-item> -->
    </el-menu>
  </div>
</template>

<script>
// import { Vue } from "vue-class-component";
// export default class pageAside extends Vue {
//   setup(props) {
//     function clickMenu(params) {
//       console.log(params);
//     }

//     return {
//       clickMenu,
//     };
//   }
// }
import { useRouter } from "vue-router";
import { defineComponent } from "vue";
export default defineComponent({
  setup(props) {
    let menuList = [
      {
        name: "首页",
        label: "home",
        link: "/page/home",
        icon: "icon-home",
      },
      {
        name: "设置",
        label: "setting",
        link: "/page/setting",
        icon: "icon-setting",
      },
      {
        name: "表格",
        label: "table",
        link: "/page/table",
        icon: "icon-table",
      },
    ];
    const router = useRouter();
    function clickMenu(params) {
      router.push(params.link);
    }
    return {
      clickMenu,
      menuList,
    };
  },
});
</script>

<style lang="scss" scoped>
.aside_container {
  // width: 200px;
  height: 100vh;
  // padding: 0 1px;
  box-sizing: border-box;
  background: #545c64;
  overflow: hidden;
}
.el-menu-vertical-demo {
  border: 0;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.menu_title {
  margin-left: 10px;
}
</style>
