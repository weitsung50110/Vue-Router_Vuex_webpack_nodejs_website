import { ref } from 'vue';
/*當您第一次調用 useCounter() 時，如果您沒有提供 initialValue 的值，它將使用預設值 0 作為初始值。
但這僅限於第一次調用，之後再次調用 useCounter() 就不會再改變 initialValue 的值 */
// 定義一個名為 useCounter 的 Composable 函式
export function useCounter(initialValue = 0) {
  // 使用 ref 創建一個響應式的 count 變數，初始值為傳入的 initialValue
  const count = ref(initialValue); //當count.value有值後，就不會再從initialValue拿值了

  // 定義一個名為 increment 的函式，用於增加 count 變數的值
  function increment() {
    count.value++; // 透過 count.value 來操作響應式變數 count
  }

  // 定義一個名為 decrement 的函式，用於減少 count 變數的值
  function decrement() {
    count.value--; // 透過 count.value 來操作響應式變數 count
  }

  // 返回一個包含 count 變數以及增加和減少 count 的方法的對象
  return {
    count, // 返回的對象包含響應式變數 count
    increment, // 返回的對象包含增加 count 的方法 increment
    decrement // 返回的對象包含減少 count 的方法 decrement
  };
}

/*一旦使用 ref 創建的響應式變數 count 獲得了初始值（例如通過 const count = ref(initialValue);），
那麼 .value 的值將會保持在最新賦予的值。此時 initialValue 不再被直接使用，除非您明確地更新 .value 屬性為新的值。

當對 count.value 進行修改時，這個更改將會在 Vue 的響應式系統中被追踪，當這個值發生變化時，
相關的視圖也會自動更新。這意味著 initialValue 在這個過程中不再被使用，
因為響應式變數 count 的值已經在運行時被動態地修改了。 */
