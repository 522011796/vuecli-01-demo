<template>
  <div>
    <el-form  :model="ruleForm" ref="ruleForm">
      <el-form-item label="活动名称" prop="name" :rules="$filter_rules({required:true})">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="手机号码" prop="phone" :rules="$filter_rules({required:true,type:'phone'})">
        <el-input v-model="ruleForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="电子邮箱" prop="email" :rules="$filter_rules({required:true,type:'email'})">
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item label="身份证" prop="card" :rules="$filter_rules({required:true,type:'card'})">
        <el-input v-model="ruleForm.card"></el-input>
      </el-form-item>
      <el-form-item label="正整数" prop="num" :rules="$filter_rules({required:true,type:'num'})">
        <el-input v-model="ruleForm.num"></el-input>
      </el-form-item>
      <el-form-item label="两位小数" prop="float2" :rules="$filter_rules({required:true,type:'float2'})">
        <el-input v-model="ruleForm.float2"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pwd" :rules="$filter_rules({required:true,type:'pwd'})">
        <el-input v-model="ruleForm.pwd"></el-input>
      </el-form-item>
      <el-form-item label="mac地址" prop="mac" :rules="$filter_rules({required:true,type:'mac'})">
        <el-input v-model="ruleForm.mac"></el-input>
      </el-form-item>
      <el-form-item label="ip地址" prop="ip" :rules="$filter_rules({required:true,type:'ip'})">
        <el-input v-model="ruleForm.ip"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm()">取消</el-button>
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
      },
      resetForm() {
        this.$refs['ruleForm'].resetFields();
      }
    }
  }
</script>
