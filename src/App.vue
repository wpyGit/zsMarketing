<template out-in>
  <div id="app">
      <transition name="fade" mode="out-in">
            <router-view></router-view>
      </transition>          
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
  }
  .fade-enter-active,.fade-leave-active {
    transition: all .2s ease;
  }

  .fade-enter,.fade-leave-active {
    opacity: 0;
  }
    .el-table td, .el-table th {
        padding: 4px 0;
        min-width: 0;
    }
</style>