<!-- 這個是父組件-->
<template>
    <!-- Vue 模板部分 -->
    <h1>崴崴的Vue3數學網站</h1>
    <NavigationLinks /> <!-- 引入導航列組件 -->
    
    <div>
      <!--
      <router-view> 是用來顯示匹配到的路由組件內容的地方。
      當使用 <router-link> 點擊路由時，匹配到的組件會在這裡被渲染顯示。
    -->
      <router-view></router-view> <!--提供了一個動態的容器，根據路由的變化，動態地呈現不同的內容。-->
    </div>
</template>

<script>
import NavigationLinks from './components/child_NavigationLinks.vue'; // 導入子組件

export default {
  components: {
    NavigationLinks // 註冊子組件
  },
  /*在父組件中，您需要使用 import 將子組件導入，並在父組件的 components 選項中註冊該子組件。 */
}
</script>

<style scoped>
/* 可以放置您的樣式 */
</style>
