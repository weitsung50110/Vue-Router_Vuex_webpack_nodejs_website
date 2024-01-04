<template>
  <!-- 模板部分 -->
    <p class="display-4">Count: {{ counter.count }}</p> <!-- 顯示計數器的當前值 -->
    <div class="btn-group" role="group">
      <button @click="counter.increment" class="btn btn-primary">Increment</button> <!-- 點擊此按鈕觸發增加計數器值的函式 -->
      <button @click="counter.decrement" class="btn btn-primary">Decrement</button> <!-- 點擊此按鈕觸發減少計數器值的函式 -->
    </div>
    <div class="container mt-4">
        <p><strong>Composables - 組合式函數</strong></p>
        <p>響應式資料管理: ref 可以將基本資料型別（如數字、字串等）轉換為響應式資料。當你需要在元件中使用響應式資料來更新視圖，例如在模板中顯示資料並且希望它能夠回應資料變化時，可以使用 ref。</p>
        <p>元件狀態管理： 透過 reactive 或 ref 來建立響應式物件或引用，方便地管理元件的狀態。可以將多個資料包裝在一個物件中，並在 setup 中使用。</p>
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
