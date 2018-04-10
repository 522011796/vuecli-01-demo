<template>
  <div>
    <div>以下是时间格式化相关的测试demo</div>
    <div>
      1、直接使用在模板中：
      <span style="color:#67C23A">{{$moment("20111031", "YYYYMMDD").fromNow()}}</span>
    </div>
    <div>
      2、通过javascript返回到模板中：
      <span style="color:#67C23A">{{dataTime}}</span>
    </div>
    <div>
      3、时间戳转时间：
      <span style="color:#67C23A">{{$moment.unix(1523240732).format("YYYY-MM-DD hh:mm:ss")}}</span>
    </div>
    <div>
      4、时间转时间戳：
      <span style="color:#67C23A">{{$moment("2018-4-9 10:25:32").format('X')}}</span>
    </div>
    <div>
      5、以下是语言包测试：
      <span style="color:#67C23A">使用方法为$t('m.test')，输出：{{$t('m.test')}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        dataTime : this.$moment("20111031", "YYYYMMDD").fromNow()
      }
    }
  }
</script>
