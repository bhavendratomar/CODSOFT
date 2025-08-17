// Adds value to the display
function addToDisplay(value) {
  document.getElementById("display").value += value;
}

// Clears everything from the display
function clearAll() {
  document.getElementById("display").value = "";
}

// Deletes the last character from the display
function removeLast() {
  const current = document.getElementById("display").value;
  document.getElementById("display").value = current.slice(0, -1);
}

// Calculates the result using eval (only for learning, avoid in production)
function calculateResult() {
  try {
    const result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  } catch (error) {
    alert("Oops! Invalid input.");
  }
}
