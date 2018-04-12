import Vue from 'vue'

Vue.component("el-table-page",{
  props: ['count'],
  template:
    `<div>
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleIndexChange"
        :page-size="pageSize"
        :page-sizes="[15, 30, 50, 100]"
        :current-page="pageIndex"
        layout="total, prev, pager, next,jumper"
        :total="count">
      </el-pagination>
    </div>`,
  data:function(){
    return {
      pageIndex:1,
      pageSize:15
    }
  },methods: {
    handleSizeChange: function (size) {
      this.pageSize = size;
      this.pageIndex = 1;
      this.fetch(this.pageIndex, size);
    },
    handleIndexChange: function (index) {
      this.pageIndex = index;
      this.fetch(index, this.pageSize);
    },
    fetch: function (index, pageSize) {
      this.$emit('pagination', index, pageSize);
    }
  }
});
