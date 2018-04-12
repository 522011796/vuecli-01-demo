<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>基础信息</el-breadcrumb-item>
      <el-breadcrumb-item>分页表格</el-breadcrumb-item>
    </el-breadcrumb>
    <div style="padding:0px 15px;margin-top:10px;">
      <el-table :data="tableData" border style="width: 100%" v-loading="listLoading">
        <el-table-column width="200px" prop="create_at" label="日期" :formatter="formatDate"></el-table-column>
        <el-table-column width="300px" prop="author.loginname" label="发布者"></el-table-column>
        <el-table-column label="内容">
          <template slot-scope="scope">
            <router-link :to="'/basicInfo/form2/content/' + scope.row.id">{{scope.row.title}}</router-link>
          </template>
        </el-table-column>
      </el-table>
      <div align="right">
        <el-table-page @pagination="pagination" :count="count"></el-table-page>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        totalCount:'',
        tableData: [],
        listLoading: false,
        //默认每页数据量
        pagesize: 15,
        //当前页码
        currentPage: 1,
        //查询的页码
        start: 1,
        //默认数据总数
        count: 0,
      }
    },
    created () {
      this.listLoading = true;
      this.getCount();
      this.getData(this.currentPage, this.pagesize);
    },
    methods:{
      formatDate: function (row, column) {
        return this.$moment(row.create_at, "YYYYMMDD").fromNow();
      },
      getData(pageNum,pageSize) {
        this.listLoading = true;
        this.$api.get('topics', {page:pageNum, limit:pageSize}, r => {
          this.tableData = r.data;
          this.listLoading = false;
        })
      },
      getCount() {
        this.listLoading = true;
        this.$api.get('topics', null, r => {
          this.count = r.data.length;
        })
      },
      pagination: function(index,pagesize) {
        this.getData(index, pagesize);
      }
    }
  }
</script>
