<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <div>{{dat.title}}</div>
          <div>
            <span v-if=dat.author class="title-font-12">
              作者：{{dat.author.loginname}}　　发表于：{{$utils.goodTime(dat.create_at)}}
            </span>
          </div>
          <hr>
          <div>
            <article v-html="dat.content"></article>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        id: this.$route.params.id,
        dat: {}
      }
    },
    created () {
      this.getData()
    },
    methods: {
      getData () {
        this.$api.get('topic/' + this.id, null, r => {
          console.log(r.data);
          this.dat = r.data
        })
      }
    }
  }
</script>
<style>
  .title-font-12{
    font-size:12px;
  }
  article{
    font-size:15px;
    color:#333333;
  }
</style>
