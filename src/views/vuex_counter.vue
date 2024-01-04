// YourComponent.vue

<template>
  <div class="row">
      <div class="col">
        <p class="count-text display-4">Count: {{ getCount2 }}</p>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button class="btn btn-primary mr-2" @click="increment_go">Increment</button>
        <button class="btn btn-danger" @click="decrement_go">Decrement</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'; // 導入 mapGetters 和 mapActions

export default {
  computed: {
    // 使用 mapGetters 輔助函數映射 getters 到 computed 屬性中
    ...mapGetters(['getCount']), // getCount 會映射到這個組件的 computed 屬性中
    getCount2() {
      return this.getCount; // 返回從 getters 中獲取的結果狀態值
    }
  },
  methods: {
    // 使用 mapActions 輔助函數映射 actions 到 methods 屬性中
    ...mapActions(['increment', 'decrement']), // increment 和 decrement 會映射到這個組件的 methods 屬性中
    increment_go(){
      this.increment();
    },
    decrement_go(){
      this.decrement();
    }
  }
};
</script>
