<template>
  <nav class="">
    <div class="nav-wrapper">
      <div class="container">
      <router-link tag="a" to="/" class="brand-logo">Tasker</router-link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><router-link tag="a" to="/" active-class="active">Create</router-link></li>
        <li><router-link tag="a" to="/list">List</router-link></li>
      </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  
}
</script>