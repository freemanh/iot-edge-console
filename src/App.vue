<template>
  <div id="app" style="height:100%">
    <el-container>
      <el-header>颐讯边缘网关控制台</el-header>
      <el-container>
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :router="true">
            <el-menu-item index="1" route="/">概览</el-menu-item>
            <el-submenu index="2">
              <template slot="title">设备管理</template>
              <el-menu-item index="2-1" route="/product">产品</el-menu-item>
              <el-menu-item index="2-2" route="/device">设备</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">规则引擎</el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import {
  Container,
  Aside,
  Main,
  Header,
  Footer,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
} from "element-ui";

import Vue from "vue";

Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);

Vue.use(Container);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Header);
Vue.use(Footer);

export default {
  name: "app",
  components: {},
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
