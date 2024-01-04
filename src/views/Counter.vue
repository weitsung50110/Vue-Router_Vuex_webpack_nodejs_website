<template>
  <!-- 模板部分 -->
  <div>
    <p>Count: {{ counter.count }}</p> <!-- 顯示計數器的當前值 -->
    <button @click="counter.increment">Increment</button> <!-- 點擊此按鈕觸發增加計數器值的函式 -->
    <button @click="counter.decrement">Decrement</button> <!-- 點擊此按鈕觸發減少計數器值的函式 -->
  </div>
</template>

<script>
import { useCounter } from '../composables/useCounter'; // 引入 useCounter Composable

export default {
  setup() {
    // 使用 useCounter Composable 創建一個名為 counter 的對象
    const counter = useCounter(); // 此 counter 對象包含了計數器的狀態和方法

    // 在 setup() 中返回 counter 對象，使其可以在模板中使用
    return {
      counter // 返回的對象可以在模板中進行解構或直接使用
    };
  }
};
</script>
