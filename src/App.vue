<template>
  <div class="mainLayout">
    <div>
      <Header @chgMenu="chgMenu"></Header>
    </div>
    <div>
      <div v-bind:style="styleMenuObject" class="menu">
        <Menu @chgLayout="chgLayout" :menu="menu" :activeShow="activeShow" :path="path" v-if="menu == 'menu' ? true : false"></Menu>
        <Menu2 @chgLayout="chgLayout" :menu="menu" :activeShow="activeShow" :path="path" v-if="menu == 'menu2' ? true : false"></Menu2>
      </div>
      <div class="content" v-bind:style="{'marginLeft':marginLeft}">
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
  import Menu2 from './components/menu/menu2'
  export default {
    components: { Header,Menu,Menu2 },
    data() {
      return {
        path:'/',
        menu:'menu',
        activeShow:'',
        isCollapse: false,
        marginLeft: '200px',
        styleMenuObject: {
          height: document.documentElement.clientHeight-63+'px',
          'overflow-y':'auto',
        },
        styleComentObject: {
          'min-height': document.documentElement.clientHeight-70-40+'px',
          background:'#ffffff',
          padding:'5px 0px'
        },
        styleContentObject: {
          height: document.documentElement.clientHeight-63+'px',
          'overflow-y':'auto',
        }
      };
    },
    methods: {
      //通过子组件通信父组件对父组件的相关内容进行调整
      chgLayout: function(item) {
        this.marginLeft = item ? '60px' : '200px';
      },
      chgMenu: function (val,path) {
        this.menu = val;
        var index = path .lastIndexOf("\/");
        var str  = path .substring(index + 1, path.length);
        this.activeShow = str;
        this.$router.push(path);
        sessionStorage.removeItem("menu");
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
