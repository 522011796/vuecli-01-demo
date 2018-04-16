// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.css'
import moment from 'moment';
import VueI18n from 'vue-i18n';
import Validation from './validate/validation';
import pagination from './assets/plugin/pagination';
import store from 'store';
import echarts from 'echarts'

// 引入echarts
Vue.prototype.$echarts = echarts;

//表单验证插件
Vue.use(Validation);
//国际化
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'zh-CN',    // 语言标识
  //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh-CN': require('./lang/zh'),   // 中文语言包
  }
});

Vue.prototype.$store = store

//时间格式化插件
Vue.prototype.$moment = moment
moment.locale('zh_cn');

Vue.use(ElementUI);
// 引用API文件
import api from './api/index.js'
// 将API方法绑定到全局
Vue.prototype.$api = api

// 引用工具文件
import utils from './utils/index.js'
// 将工具方法绑定到全局
Vue.prototype.$utils = utils

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,  //国际化
  router,
  components: { App },
  template: '<App/>'
})
