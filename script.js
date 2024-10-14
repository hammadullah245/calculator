let output = document.getElementById('inputbox');

function display(num) {
  output.value += num;
}

function calculate() {
  try {
    output.value = eval(output.value);
  } catch (err) {
    alert("Invalid");
  }
}

function Clear() {
  output.value = " ";
}

function delet(){
  output.value = output.value.slice(0,-1);
}
