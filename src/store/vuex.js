// src/store/vuex_counter.js

import { createStore } from 'vuex';

// 創建並匯出一個 Vuex store
export default createStore({
  state: {
    // 在這裡定義你的應用程式狀態
    count: 0, // 一個簡單的數字狀態示例
    result: 0 // 初始結果為 0
  },
  mutations: {
    // 在 mutations 中定義修改狀態的方法
    // mutations 用於修改 state 中的數據
    increment(state) {
      // 在這裡修改狀態
      state.count++; // 增加 count 狀態的值
    },
    decrement(state) {
      // 在這裡修改狀態
      state.count--; // 減少 count 狀態的值
    },
    // mutation 用來修改狀態
    setResult(state, payload) {
      state.result = payload; // 設置結果狀態為 payload 中的值
    }
  },
  actions: {
    // 在 actions 中定義觸發 mutations 的動作
    // actions 可以執行異步操作或者觸發 mutations
    increment(context) {
      // 在這裡觸發 mutation
      context.commit('increment'); // 觸發 increment mutation
    },
    decrement(context) {
      // 在這裡觸發 mutation
      context.commit('decrement'); // 觸發 decrement mutation
    },
    // action 用來執行計算並呼叫 mutation 來更新結果狀態
    calculate({ commit }, payload) { //context.commit == { commit }
      commit('setResult', payload); // 呼叫 mutation，並將 payload 中的值作為新的結果
    }
  },
  getters: {
    // 在 getters 中定義獲取狀態的方法
    // getters 用於從 state 中取得派生出的數據
    getCount: state => state.count, // 返回 count 狀態的值
    // getter 用來獲取結果狀態值
    getResult: state => state.result
  }
});
