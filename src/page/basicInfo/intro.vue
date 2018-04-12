<template>
  <div>
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>基础信息</el-breadcrumb-item>
        <el-breadcrumb-item>静态表单</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div style="padding:0px 15px;">
      <div style="margin-bottom: 10px;margin-top:10px;">
        <el-button size="medium" type="primary" @click.native="handleAdd">新增</el-button>
      </div>
      <el-table :data="tableData" border style="width: 100%" v-loading="listLoading">
        <el-table-column prop="birth" label="日期"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="sexval" label="性别" :formatter="formatSex"></el-table-column>
        <el-table-column prop="age" label="年龄"></el-table-column>
        <el-table-column prop="addr" label="地址"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="addForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sexval">
          <el-radio-group v-model="addForm.sexval">
            <el-radio label="0">男</el-radio>
            <el-radio label="1">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input-number v-model="addForm.age" :min="0" :max="200"></el-input-number>
        </el-form-item>
        <el-form-item label="生日" prop="birth">
          <el-date-picker type="date" placeholder="选择日期" v-model="addForm.birth" @change="dateChange"></el-date-picker>
        </el-form-item>
        <el-form-item label="地址">
          <el-input type="textarea" v-model="addForm.addr"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="closeModal">取消</el-button>
        <el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    data() {
      //此处为自定义验证，因为是demo，所以这里写在了内部，后期会提出来为公共
      var checkAge = (rule, value, callback) => {
          if (!value) {
            return callback(new Error('年龄不能为空'));
          }
          setTimeout(() => {
            if (!Number.isInteger(value)) {
              callback(new Error('请输入数字值'));
            } else {
              if (value < 18) {
                callback(new Error('必须年满18岁'));
              } else {
                callback();
              }
            }
          }, 1000);
      };
      return {
        tableData: [{
          sexval:'1',
          birth: this.$moment.unix(1523240732).format("YYYY-MM-DD"),
          name: '王小虎',
          addr: '上海市普陀区金沙江路 1518 弄',
          age: 18
        },{
          sexval:'1',
          birth: this.$moment.unix(1523240732).format("YYYY-MM-DD"),
          name: '王小虎',
          addr: '上海市普陀区金沙江路 1518 弄',
          age: 18
        },{
          sexval:'1',
          birth: this.$moment.unix(1523240732).format("YYYY-MM-DD"),
          name: '王小虎',
          addr: '上海市普陀区金沙江路 1518 弄',
          age: 18
        },{
          sexval:'0',
          birth: this.$moment.unix(1523240732).format("YYYY-MM-DD"),
          name: '王小虎',
          addr: '上海市普陀区金沙江路 1518 弄',
          age: 18
        },{
          sexval:'1',
          birth: this.$moment.unix(1523240732).format("YYYY-MM-DD"),
          name: '王小虎',
          addr: '上海市普陀区金沙江路 1518 弄',
          age: 18
        },{
          sexval:'1',
          birth: this.$moment.unix(1523240732).format("YYYY-MM-DD"),
          name: '王小虎',
          addr: '上海市普陀区金沙江路 1518 弄',
          age: 18
        },{
          sexval:'1',
          birth: this.$moment.unix(1523240732).format("YYYY-MM-DD"),
          name: '王小虎',
          addr: '上海市普陀区金沙江路 1518 弄',
          age: 18
        },{
          sexval:'1',
          birth: this.$moment.unix(1523240732).format("YYYY-MM-DD"),
          name: '王小虎',
          addr: '上海市普陀区金沙江路 1518 弄',
          age: 18
        }],
        dialogFormVisible: false,//新增界面是否显示
        addLoading: false,
        listLoading: false,
        addFormRules: {
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' }
          ],
          age: [//此处使用了上面的自定义验证
            { validator: checkAge, trigger: 'blur' }
          ],/*
          birth: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],*/
          sexval: [
            { required: true, message: '请选择性别', trigger: 'change' }
          ]
        },
        //新增界面数据
        addForm: {
          name: '',
          sexval: 1,
          age: 0,
          birth: '',
          addr: ''
        },
      }
    },
    methods:{
      dateChange(time) {
        this.addForm.birth = this.$moment.unix(this.$moment(time).format('X')).format("YYYY-MM-DD");
      },
      //性别显示转换
      formatSex: function (row, column) {
        return row.sexval == 0 ? '男' : row.sexval == 1 ? '女' : '未知';
      },
      //显示新增界面
      handleAdd () {
        this.dialogFormVisible = true;
        this.addForm = {
          name: '',
          sexval: '1',
          age: 0,
          birth: '',
          addr: ''
        };
      },
      //显示编辑界面
      handleEdit: function (index, row) {
        //row.birth = this.$moment(row.birth).format();
        this.dialogFormVisible = true;
        this.addForm = Object.assign({}, row);
      },
      //删除
      handleDel: function (index, row) {
        this.$confirm('确认删除该记录吗?', '提示', {
          type: 'warning'
        }).then(() => {
          this.listLoading = true;
          //NProgress.start();
          let para = { id: row.id };
          //模拟删除数据,实际情况是根据id删除数据，再次执行请求列表数据
          this.tableData.splice(index,1);
          console.log(para);
        }).catch(() => {
        });
      },
      closeModal(){
        this.$refs['addForm'].resetFields();
        this.dialogFormVisible = false;
        this.addLoading = false;
      },
      //新增
      addSubmit: function () {
        this.$refs.addForm.validate((valid) => {
          if (valid) {
            this.$confirm('确认提交吗？', '提示', {}).then(() => {
              this.addLoading = true;
              //Object.assign 为es6的对象处理方式，不支持IE8-的浏览器，目的是将对象的参数取出来重新组装
              let para = Object.assign({}, this.addForm);
              //para.birth = (!para.birth || para.birth == '') ? '' : this.$moment(para.birth).format('X');
              //模拟添加数据
              this.tableData.push({
                id: this.tableData.length+1,
                birth: para.birth,
                name: para.name,
                addr: para.addr,
                sexval: para.sexval,
                age: para.age
              });
              this.$refs['addForm'].resetFields();
              this.dialogFormVisible = false;
              this.addLoading = false;
            });
          }
        });
      },
    }
  }
</script>
