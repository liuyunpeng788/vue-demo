<template>
  <div>
    <h1> welcome to home page</h1>
    <router-link to="/home/news"> 新闻</router-link>
    <router-link to="/home/test"> 测试</router-link>
    <router-view></router-view>
  </div>

</template>

<script>
  export default {
    name: 'Home'
  }
</script>

<style scoped>

</style>
