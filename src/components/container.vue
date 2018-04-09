<template>
  <div id="container">
    <Menu></Menu>
    <transition name="slide-fade">
      <router-view class="content"></router-view>
    </transition>
  </div>
</template>
<script>
  import Menu from './../components/menu.vue'
  export default {
    components: {Menu}
  }
</script>
