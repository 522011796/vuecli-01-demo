<template>
  <div>
    <el-menu :default-active="activeIndex"
             class="el-menu-demo"
             mode="horizontal"
             background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b">
      <el-menu-item index="0" style="width: 200px"></el-menu-item>
      <el-menu-item index="1" @click="jumpHref('menu')">
        处理中心
      </el-menu-item>
      <el-menu-item index="2" @click="jumpHref('menu2')">
        我的工作台
      </el-menu-item>
      <el-menu-item index="3">消息中心</el-menu-item>
      <el-menu-item index="4">订单管理</el-menu-item>
    </el-menu>
    <div class="line"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        href : ''
      };
    },
    methods :{
      jumpHref(val){
        this.$emit('chgMenu', val);
      }
    }
  }
</script>
