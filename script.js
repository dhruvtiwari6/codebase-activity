// Select button, chocolate container, and correct password input field
const button = document.getElementById("chocolateButton");
const correctPassword = document.getElementById("correct-password");

// Add click event listener
button.addEventListener("click", () => {
  // Check if the entered password matches the correct one
  if (correctPassword.value === "lead_dhruv_yash__codebase_ayush") {
    alert("Wow! You got chocolate 🎉🍫");
  } else {
    alert("Wrong password, try again!");
  }
});
