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
        case 'phone':
          rules.push({pattern: /^1[34578]\d{9}$/, message: '请输入正确的手机号码', trigger: 'blur'  });
          break;
        case 'card':
          rules.push({pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/, message: '请输入15或者18位身份证号码', trigger: 'blur'  });
          break;
        case 'num':
          rules.push({pattern: /^[1-9]\d*$/, message: '请输入非0的整数', trigger: 'blur'  });
          break;
        case 'float2':
          rules.push({pattern: /^([1-9]+[0-9]*(\.[0-9]{1,2})?|0\.[1-9][0-9]?|0\.0[1-9])$/, message: '正整数且最多两位小数', trigger: 'blur'  });
          break;
        case 'pwd':
          rules.push({pattern: /^[^\u4e00-\u9fa5\s]{6,20}$/, message: '6-20位任意字符', trigger: 'blur'  });
          break;
        case 'mac':
          rules.push({pattern: /^[A-F0-9]{2}(-[A-F0-9]{2}){5}$|^[A-F0-9]{2}(:[A-F0-9]{2}){5}$/, message: '请输入正确的mac地址', trigger: 'blur'  });
          break;
        case 'ip':
          rules.push({pattern: /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/, message: '请输入正确的ip地址', trigger: 'blur'  });
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
