<template>
  <div>
    <el-table :data="tableData" border style="width: 100%" v-loading="listLoading">
      <el-table-column width="200px" prop="create_at" label="日期" :formatter="formatDate"></el-table-column>
      <el-table-column width="300px" prop="author.loginname" label="发布者"></el-table-column>
      <el-table-column label="内容">
        <template slot-scope="scope">
          <router-link :to="'/basicInfo/form2/content/' + scope.row.id">{{scope.row.title}}</router-link>
        </template>
      </el-table-column>
    </el-table>
    <router-view></router-view>
    <div align="right">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalCount">
      </el-pagination>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [],
        listLoading: false,
        //默认每页数据量
        pagesize: 10,
        //当前页码
        currentPage: 1,
        //查询的页码
        start: 1,
        //默认数据总数
        totalCount: 0,
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
        this.$api.get('topics', {page:pageNum, limit:pageSize}, r => {
          this.tableData = r.data;
          this.listLoading = false;
        })
      },
      getCount() {
        this.$api.get('topics',null, r => {
          this.totalCount = r.data.length;
        })
      },
      //每页显示数据量变更.
      handleSizeChange: function(val) {
        this.listLoading = true;
        this.pagesize = val;
        this.getData(this.currentPage, this.pagesize);
      },

      //页码变更
      handleCurrentChange: function(val) {
        this.listLoading = true;
        this.currentPage = val;
        this.getData(this.currentPage, this.pagesize);
      },
    }
  }
</script>
