<template>
  <div>
    <el-row class="tac" v-bind:style="{width:asideWidth}"  v-show="!isCollapse">
      <div v-bind:style="{width:asideWidth}" style="text-align: center;background: #f0f0f0" @click="closeAndOpen">
        <i class="fa fa-reorder"></i>
      </div>
      <el-col :span="24">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
          <router-link to="/">
            <el-menu-item index="0">
              <i class="fa fa-home fa-fw"></i>
              首页
            </el-menu-item>
          </router-link>
          <el-submenu index="1">
            <template slot="title">
              <i class="fa fa-file fa-fw"></i>
              <span>基础信息</span>
            </template>
            <router-link to="/basicInfo/intro">
              <el-menu-item index="0">
                静态表单
              </el-menu-item>
            </router-link>
            <router-link to="/basicInfo/form2">
              <el-menu-item index="0">
                动态表单
              </el-menu-item>
            </router-link>
            <router-link to="/basicInfo/form3">
              <el-menu-item index="0">
                表单验证
              </el-menu-item>
            </router-link>
            <router-link to="/basicInfo/form4">
              <el-menu-item index="0">
                分页表格
              </el-menu-item>
            </router-link>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>

    <el-row class="tac" v-show="isCollapse">
      <div style="text-align: center;background: #f0f0f0" @click="closeAndOpen">
        <i class="fa fa-reorder"></i>
      </div>
      <div>
        <ul class="menu-ul" ref="menuCollapsed">
          <template>
            <li class="el-submenu item" style="margin-top: 10px" @mouseover="showMenu($event,true)" @mouseout="showMenu($event,false)">
              <i class="fa fa-home fa-fw iconMenuMargin"></i>
              <ul class="el-menu submenu hock-1" @mouseover="showMenu($event,true)" @mouseout="showMenu($event,false)">
                <li class="el-menu-item" style="height:45px;line-height: 45px">
                  ceshi1
                </li>
                <li class="el-menu-item" style="height:45px;line-height: 45px">
                  ceshi1
                </li>
              </ul>
            </li>
          </template>
          <template>
            <li class="el-submenu item" style="margin-top: 10px" @mouseover="showMenu($event,true)" @mouseout="showMenu($event,false)">
              <i class="fa fa-file fa-fw iconMenuMargin"></i>
              <ul class="el-menu submenu hock-2" @mouseover="showMenu($event,true)" @mouseout="showMenu($event,false)">
                <li class="el-menu-item" style="height:45px;line-height: 45px">
                  ceshi2
                </li>
                <li class="el-menu-item" style="height:45px;line-height: 45px">
                  ceshi2
                </li>
              </ul>
            </li>
          </template>
        </ul>
      </div>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: false,
        asideWidth:'200px'
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      closeAndOpen() {
        this.isCollapse = !this.isCollapse;
        this.$emit('chgLayout', this.isCollapse);
      },
      showMenu(i,status){
        //console.log(i.currentTarget.getElementsByTagName("ul")[0].style.display);
        i.currentTarget.getElementsByTagName('ul')[0].style.display=status?'block':'none';
      }
    }
  }
</script>
<style>
  ul.el-menu{
    border-right: 0;
  }
  .iconMenu{
    text-align: center;
    background: #f5f5f5;
  }
  .item{
    position: relative;
  }
  .submenu{
    position:absolute;
    top:0px;
    left:60px;
    z-index:99999;
    height:auto;
    display:none;
    border:1px solid #dddddd !important;
  }
  .menu-ul{
    margin:0;
    padding:0;
    width: 60px;
    text-align: center;
  }
  .iconMenuMargin{
    margin-right: 0 !important;
    color: #909399;
  }
  a{
    text-decoration: none;
  }
</style>
