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
@import "~materialize-css";
</style>
