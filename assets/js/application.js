document.addEventListener('DOMContentLoaded', function() {
  var digitedNumber = document.querySelectorAll("#digited-number");
  var result = document.querySelectorAll("#result-final");
  var number = digitedNumber[0].children[0];
  var clearAll = document.querySelectorAll(".clear-all");
  
  [].forEach.call(document.querySelectorAll(".button-number"), function(el) {
    el.addEventListener("click", function() {
      
      number.innerText = (number.innerText + "" + this.value) || this.value;
      result[0].children[0].innerText = CalculatorN2(number.innerText);
      clearAll[0].style.display = "block"; 
    });
  });

  [].forEach.call(document.querySelectorAll(".button-backspace"), function(el) {
    el.addEventListener("click", function() {
      
      number.innerText = number.innerText.slice(0, -1);
      result[0].children[0].innerText = CalculatorN2(number.innerText);
      
      if(number.innerText.length === 0) {
        clearAll[0].style.display = "none";
        result[0].children[0].innerText = "0.00"
      }
    });
  });

  function CalculatorN2(note) {
    return ((7 - (note * 0.4)) / 0.6).toFixed(2);
  }
});