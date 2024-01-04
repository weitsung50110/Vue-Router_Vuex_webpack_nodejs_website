<template>
  
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label for="number1">Number 1</label>
          <input type="number" class="form-control" id="number1" v-model="number1" />
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="number2">Number 2</label>
          <input type="number" class="form-control" id="number2" v-model="number2" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <button class="btn btn-primary mr-2" @click="add">Add</button>
        <button class="btn btn-danger" @click="subtract">Subtract</button>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-md-6">
        <p class="result-text">Result: {{ result2 }}</p>
      </div>
    </div>
  
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      number1: 0,
      number2: 0
    };
  },
  computed: {
    ...mapGetters(['getResult']), // 將 getResult 映射到組件的 computed 屬性中
    result2() {
      return this.getResult; // 返回從 getters 中獲取的結果狀態值
    }
  },
  methods: {
    ...mapActions(['calculate']), // 將 calculate 映射到組件的 methods 屬性中
    add() {
      const sum = parseInt(this.number1) + parseInt(this.number2);
      this.calculate(sum); // 呼叫 action 並傳遞 sum 作為 payload
    },
    subtract() {
      const difference = parseInt(this.number1) - parseInt(this.number2);
      this.calculate(difference); // 呼叫 action 並傳遞 difference 作為 payload
    }
  }
};
</script>
