<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>基础信息</el-breadcrumb-item>
      <el-breadcrumb-item>标签页</el-breadcrumb-item>
    </el-breadcrumb>
    <div style="padding:0px 15px;margin-top:10px;">
      <el-tabs v-model="activeName">
        <el-tab-pane label="用户管理" name="first">
          <TabMenu1></TabMenu1>
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="second">
          <TabMenu2></TabMenu2>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
  import TabMenu1 from './tabMenu1'
  import TabMenu2 from './tabMenu2'
  export default {
    components: { TabMenu1, TabMenu2 },
    data() {
      return {
        activeName: 'first'
      };
    }
  }
</script>
