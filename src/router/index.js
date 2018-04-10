import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Content from '@/page/content'
import Intro from '@/page/basicInfo/intro'
import Form2 from '@/page/basicInfo/form2'
import Form3 from '@/page/basicInfo/form3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    }, {
      path: '/basicInfo/intro',
      component: Intro
    }, {
      path: '/basicInfo/form2',
      component: Form2
    }, {
      path: '/basicInfo/form3',
      component: Form3
    }, {
      path: '/basicInfo/form2/content/:id',
      component: Content
    }
  ]
})
