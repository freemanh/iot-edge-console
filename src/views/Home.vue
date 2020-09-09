<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          当月设备消息量：0
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          设备在线时长：0
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          产品：0
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          设备：0
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import { Row, Col } from "element-ui";

import Vue from 'vue';
Vue.use(Row)
Vue.use(Col)

export default {
  name: "Home",
  components: {},
};
</script>
