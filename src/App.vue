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
@import '~material-icons/iconfont/material-icons.scss';

//please put the paths as per yours project directory structure
@import "~materialize-css/sass/components/color-variables";
$primary-color: color("deep-purple", "lighten-1") !default;
$button-raised-background: color("deep-purple", "lighten-1") !default;
$input-focus-color: color("deep-purple", "lighten-1") !default;
$chip-selected-color: color("deep-purple", "lighten-1") !default;
$secondary-color: color("deep-purple", "lighten-1") !default;
@import '~materialize-css/sass/materialize' 
</style>
