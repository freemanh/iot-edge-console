<template>
  <el-table :data="products" style="width: 100%">
    <el-table-column prop="code" label="产品编码" width="180"></el-table-column>
    <el-table-column prop="name" label="产品名称" width="180"></el-table-column>
    <el-table-column prop="createdAt" label="添加时间"></el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">管理设备</el-button>
        <el-button type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { Table, TableColumn, Button } from "element-ui";

import Vue from "vue";
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Button)

export default {
  name: "product",
  data() {
    return {
      products: [
        {
          code: "test",
          name: "测试产品",
          createdAt: "2020-09-09 13:00:00",
        },
      ],
    };
  },
  components: {},
};
</script>