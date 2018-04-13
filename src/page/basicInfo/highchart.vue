<template>
  <div>
    <div class="x-bar">
      <el-row>
        <el-col :span="12">
          <div id="myChart" :style="{width: '100%', height: '300px'}"></div>
        </el-col>
        <el-col :span="12">
          <div id="myChart1" :style="{width: '100%', height: '300px'}"></div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div id="myChart2" :style="{width: '100%', height: '300px'}"></div>
        </el-col>
        <el-col :span="12">
          <div id="myChart3" :style="{width: '100%', height: '300px'}"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        data:[5, 20, 36, 10, 10, 20]
      }
    },
    mounted(){
      this.drawLine();
      this.drawline2();
      this.drawline3();
      this.drawline4();
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'));
        // 绘制图表
        myChart.setOption({
          title: {text: '柱状图'},
          tooltip: {},
          xAxis: {
            data: ["数据1", "数据1", "数据1", "数据1", "数据1", "数据1"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: this.data
          }]
        });
      },
      drawline2() {
        let myChart = this.$echarts.init(document.getElementById('myChart1'));
        myChart.setOption({
          // 绘制图表
          title: {
            text: '折线图堆叠'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name:'邮件营销',
              type:'line',
              stack: '总量',
              data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
              name:'联盟广告',
              type:'line',
              stack: '总量',
              data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
              name:'视频广告',
              type:'line',
              stack: '总量',
              data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
              name:'直接访问',
              type:'line',
              stack: '总量',
              data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
              name:'搜索引擎',
              type:'line',
              stack: '总量',
              data:[820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]
        });
      },
      drawline3(){
        let myChart = this.$echarts.init(document.getElementById('myChart2'));
        myChart.setOption({
          title : {
            text: '某站点用户访问来源',
            subtext: '纯属虚构',
            x:'center'
          },
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
          },
          series : [
            {
              name: '访问来源',
              type: 'pie',
              radius : '55%',
              center: ['50%', '60%'],
              data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        });
      },
      drawline4(){
        let myChart = this.$echarts.init(document.getElementById('myChart3'));
        let option = {
          tooltip : {
            formatter: "{a} <br/>{b} : {c}%"
          },
          toolbox: {
            feature: {
              restore: {},
              saveAsImage: {}
            }
          },
          series: [
            {
              name: '业务指标',
              type: 'gauge',
              detail: {formatter:'{value}%'},
              data: [{value: 50, name: '完成率'}]
            }
          ]
        };

        setInterval(function () {
          option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
          myChart.setOption(option, true);
        },2000);
      }
    }
  }
</script>
