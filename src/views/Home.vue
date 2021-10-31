<template>
  <div class="home">
    <el-row :gutter="10" :span="24">
      <el-col :span="6">
        <el-card class="box-card">
          <div class="card_content">
            <el-avatar :size="50" :src="circleUrl"></el-avatar>
            <div class="name_content">
              <div>姓名：{{ name }}</div>
              <div>年龄：{{ age }}</div>
            </div>
          </div>
          <div class="btn_container">
            <el-button @click="clickDemo" size="small" type="primary"
              >点击</el-button
            >
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div class="card_content">
            <el-avatar :size="50" :src="circleUrl"></el-avatar>
            <div class="name_content">
              <div>姓名：{{ name }}</div>
              <div>年龄：{{ age }}</div>
            </div>
          </div>
          <div class="btn_container">
            <el-button @click="clickDemo" size="small" type="primary"
              >点击</el-button
            >
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div class="card_content">
            <el-avatar :size="50" :src="circleUrl"></el-avatar>
            <div class="name_content">
              <div>姓名：{{ name }}</div>
              <div>年龄：{{ age }}</div>
            </div>
          </div>
          <div class="btn_container">
            <el-button @click="clickDemo" size="small" type="primary"
              >点击</el-button
            >
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div class="card_content">
            <el-avatar :size="50" :src="circleUrl"></el-avatar>
            <div class="name_content">
              <div>姓名：{{ name }}</div>
              <div>年龄：{{ age }}</div>
            </div>
          </div>
          <div class="btn_container">
            <el-button @click="clickDemo" size="small" type="primary"
              >点击</el-button
            >
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang='ts'>
// import { Options, Vue } from "vue-class-component";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

// @Options({
//   components: {
//     HelloWorld,
//   },
// })
// export default class Home extends Vue {}
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  setup(props) {
    const state = reactive({
      name: "禁止吸烟",
      age: 18,
      clickDemo: function () {
        state.age++;
      },
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    });
    return toRefs(state);
  },
});
</script>
<style lang="scss" scoped>
.card_content {
  display: flex;
  // justify-content: space-between;
  align-items: center;
  .name_content {
    margin-left: 20px;
  }
}
.btn_container {
  display: flex;
  justify-content: flex-end;
}
</style>
