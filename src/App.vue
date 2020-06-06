<template>
  <div id="app">
    <navbar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/app/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
$material-icons-font-path: '~material-icons/iconfont/';
@import "~materialize-css";
@import '~material-icons/iconfont/material-icons.scss';
</style>
