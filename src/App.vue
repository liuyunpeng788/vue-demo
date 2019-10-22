<template>
  <div id="app">
    <h1>hello world</h1>
    <!--tag 属性，表示所属样式，默认是超链接-->
    <!--<router-link to="/home" tag="a" active-class="active">home</router-link>-->
    <!--<router-link to="/hello-world"  active-class="active">product</router-link>-->
    <!--统一修改活动标签的样式-->
    <router-link to="/home" tag="a">home</router-link>
    <router-link to="/hello-world" >product</router-link>
     <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
   .active{
     color: red;
   }
</style>
