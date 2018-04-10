/**
 * 以下为开发的vue插件
 * */
var Validation = {};
Validation.install = function (Vue, options) {
  /**
   * 参数 item
   * required true  必填项
   * maxLength  字符串的最大长度
   * min 和 max 必须同时给 min < max  type=number
   * type 手机号 mobile
   *      邮箱   email
   *      网址   url
   *      持续添加中.......
   * */

  Vue.prototype.$filter_rules = function (item){
    let rules = [];
    if(item.required){
      rules.push({ required: true, message: '该输入项为必填项!', trigger: 'blur' });
    }
    if(item.maxLength){
      rules.push({ min:1,max:item.maxLength, message: '最多输入'+item.maxLength+'个字符!', trigger: 'blur' })
    }
    if(item.min&&item.max){
      rules.push({ min:item.min,max:item.max, message: '字符长度在'+item.min+'至'+item.max+'之间!', trigger: 'blur' })
    }
    if(item.type){
      let type = item.type;
      switch(type) {
        case 'email':
          rules.push({ type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur'  });
          break;
        default:
          rule.push({});
          break;
      }
    }
    return rules;
  };
};

module.exports = Validation;
