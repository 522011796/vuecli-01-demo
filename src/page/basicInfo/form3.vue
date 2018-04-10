<template>
  <div>
    <el-form  :model="ruleForm" ref="ruleForm">
      <el-form-item label="活动名称" prop="name" :rules="$filter_rules({required:true})">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="手机号码" prop="phone" :rules="$filter_rules({required:true})">
        <el-input v-model="ruleForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="电子邮箱" prop="email" :rules="$filter_rules({required:true,type:'email'})">
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item label="身份证" prop="card" :rules="$filter_rules({required:true})">
        <el-input v-model="ruleForm.card"></el-input>
      </el-form-item>
      <el-form-item label="正整数" prop="num" :rules="$filter_rules({required:true})">
        <el-input v-model="ruleForm.num"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('ruleForm')">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          email: ''
        },
        rules: {
          name: [
            {required: true, message: '请输入活动名称', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
        },
      }
    },
    methods: {
      onSubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log('succcess');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>
