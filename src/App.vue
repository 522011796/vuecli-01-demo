<template>
  <div class="mainLayout">
    <div>
      <Header @chgMenu="chgMenu"></Header>
    </div>
    <div>
      <div v-bind:style="styleMenuObject" class="menu">
        <Menu @chgLayout="chgLayout" :menu="menu" :path="path"></Menu>
      </div>
      <div class="content" v-bind:style="{'marginLeft':marginLeft}">
        <div class="breadcrumb">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div v-bind:style="styleContentObject">
          <div v-bind:style="styleComentObject">
            <router-view></router-view>
          </div>
          <div class="footer">
            footer
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Header from './components/header'
  import Menu from './components/menu/menu'
  export default {
    components: { Header,Menu },
    data() {
      return {
        path:'home',
        menu:'menu',
        isCollapse: false,
        marginLeft: '200px',
        styleMenuObject: {
          height: document.documentElement.clientHeight-61+'px',
        },
        styleComentObject: {
          'min-height': document.documentElement.clientHeight-61-35-45+'px',
          background:'#ffffff',
          padding:'5px 15px'
        },
        styleContentObject: {
          height: document.documentElement.clientHeight-61-36+'px',
          'overflow-y':'auto',
        }
      };
    },
    methods: {
      //通过子组件通信父组件对父组件的相关内容进行调整
      chgLayout: function(item) {
        this.marginLeft = item ? '60px' : '200px';
      },
      chgMenu: function (val) {
        this.menu = val;
      }
    }
  }
</script>
<style>
  body{
    margin:0;
  }
  .mainLayout{

  }
  .header{

  }
  .main{

  }
  .breadcrumb{

  }
  .menu{
    float:left;
    border-right: 1px solid #dddddd;
    background: #ffffff;
  }
  .el-breadcrumb{
    background: #ffffff;
    border-bottom: 1px solid #f5f5f5;
    height:35px;
    line-height:35px;
    padding:0px 15px;
  }
  .content{
    /*margin-left: 200px;*/
    background: #f5f5f5;
  }
  .footer{
    text-align: center;
    height:35px;
    line-height: 35px;
    background: #f5f5f5;
  }
</style>
