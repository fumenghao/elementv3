<template>
  <div class="login_container">
    <div class="blur"></div>
    <div class="content">
      <div class="form_container">
        <el-card class="card_container" shadow="always">
          <el-form ref="form" :rules="rules" label-width="80px" :model="param">
            <el-form-item label="Name:" prop="username">
              <el-input v-model="param.username"></el-input>
            </el-form-item>
            <el-form-item label="密码:" prop="password">
              <el-input v-model="param.password" type="password"></el-input>
            </el-form-item>
            <div class="login-btn">
              <el-button width="100%" type="primary" size="small"
                >提交</el-button
              >
            </div>
          </el-form>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, ref, toRefs } from "vue";
export default {
  setup() {
    const param = reactive({
      username: "admin",
      password: "123123",
    });
    const rules = {
      username: [
        {
          required: true,
          message: "请输入用户名",
          trigger: "blur",
        },
      ],
    };
    return {
      param,
      rules,
    };
  },
};
</script>

<style lang="scss" scoped>
.login_container {
  width: 100%;
  height: 100vh;
  .blur {
    width: 100%;
    height: 100%;
    position: relative;
    background-image: url("/static/bg.png");
    filter: blur(4px);
    z-index: 1;
  }
  .content {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
  }
  .form_container {
    background: #ffffff;
    width: 30%;
    margin: 100px auto 0;
  }
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
.card_container {
  border-radius: 6px;
}
</style>