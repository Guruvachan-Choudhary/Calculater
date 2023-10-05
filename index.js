
function appendToResult(value) {
   document.getElementById('result').value += value;
  }

  function clearResult() {
    document.getElementById('result').value = '';
  }

  function deleteCharacter() {
    var currentValue = document.getElementById('result').value;
    document.getElementById('result').value = currentValue.slice(0, -1);
  }

  function calculateResult() {
    var result = document.getElementById('result').value;
    let calculatedResult = eval(result);
    document.getElementById('result').value = calculatedResult;
    console.log(`The Total of given value is :- ${calculatedResult}`)
  }
