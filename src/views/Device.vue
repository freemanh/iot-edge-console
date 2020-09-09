<template>
  <el-table :data="devices" style="width: 100%">
    <el-table-column prop="code" label="设备编码" width="180"></el-table-column>
    <el-table-column prop="name" label="设备名称" width="180"></el-table-column>
    <el-table-column prop="product" label="所属产品" width="180"></el-table-column>
    <el-table-column prop="online" label="是否在线" width="180" :formatter="formatBool"></el-table-column>
    <el-table-column prop="createdAt" label="添加时间"></el-table-column>
    <el-table-column label="操作" fixed="right">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
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
Vue.use(Button);

export default {
  name: "product",
  data() {
    return {
      devices: [
        {
          code: "test",
          name: "测试设备",
          product: "测试产品",
          online: true,
          createdAt: "xxx",
        },
      ],
    };
  },
  components: {},
  methods: {
    formatBool(row, column, cellValue) {
      return cellValue ? "是" : "否";
    },
  },
};
</script>