<template>
  <div class="navigation-links row">
    <div class="col-4">
      <div class="ml-1">
        <router-link to="/" class="btn btn-secondary">Home</router-link>
      </div>
    </div>
    <div class="col-4">
      <div class="ml-1">
        <router-link to="/about" class="btn btn-secondary">About</router-link>
      </div>
    </div>
    <div class="col-4">
      <div class="ml-1">
        <router-link to="/counter" class="btn btn-secondary">Counter</router-link>
      </div>
    </div>
    <!-- 可以添加其他路由鏈接 -->
  </div>
</template>

<script>
export default {
  // 組件內容
}
</script>

<style>
/* 在這裡定義您的樣式 */

</style>
