console.log("Hello, Webpack!");
document.addEventListener('DOMContentLoaded', function() {
    const displayButton = document.getElementById('displayButton');
    displayButton.addEventListener('click', displayUserInput);
  });
  
  function displayUserInput() {
    const userInput = document.getElementById('userInput').value;
    document.getElementById('displayArea').innerText = `您輸入的內容是：${userInput}`;
  }