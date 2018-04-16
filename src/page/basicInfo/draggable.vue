<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>基础信息</el-breadcrumb-item>
      <el-breadcrumb-item>拖拽</el-breadcrumb-item>
    </el-breadcrumb>
    <div style="padding:0px 15px;margin-top:10px;">
      <el-row :gutter="24">
        <el-col :span="12">
          <div>拖拽其中一个试试</div>
          <draggable :list="list2" :move="getdata" @update="datadragEnd" :options="{animation: 300,handle:'.dargDiv'}">
            <transition-group name="list-complete" >
              <el-card shadow="hover" class="box-card dargDiv" v-for="element in list2" :key="element.it.name">
                {{element.id}}
              </el-card>
            </transition-group>
          </draggable>
        </el-col>
        <el-col :span="12">
          <div>显示拖拽后的数据</div>
          <div style="border:1px solid #dddddd;">
            <pre>
              {{list2}}
            </pre>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  import draggable from 'vuedraggable'
  export default {
    components: {
      draggable
    },
    data() {
      return {
        list2:[
          {id:"id1",it:{name:'bbbb'}},
          {id:"id2",it:{name:'2222'}},
          {id:"id3",it:{name:'3333'}},
          {id:"id4",it:{name:'4444'}}
        ]
      }
    },
    methods: {
      getdata (evt) {
        console.log(evt.draggedContext.element.id)
      },
      datadragEnd (evt) {
        console.log('拖动前的索引 :' + evt.oldIndex);
        console.log('拖动后的索引 :' + evt.newIndex);
        console.log(this.list2);
      }
    }
  }
</script>
