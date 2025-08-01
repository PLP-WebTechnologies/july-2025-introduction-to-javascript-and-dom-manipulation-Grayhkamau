// JavaScript Basics
function checkAge() {
  let age = parseInt(prompt("Enter your age:"));
  let result = "";

  if (age < 13) {
    result = "You are a child.";
  } else if (age >= 13 && age < 20) {
    result = "You are a teenager.";
  } else {
    result = "You are an adult.";
  }

  document.getElementById("age-result").textContent = result;
}



//  Loops
function listHobbies() {
  const hobbies = ["Coding", "Gaming", "Music", "Reading"];
  const list = document.getElementById("hobbies-list");
  list.innerHTML = ""; // clear previous

  hobbies.forEach(hobby => {
    const li = document.createElement("li");
    li.textContent = hobby;
    list.appendChild(li);
  });
}

// DOM Manipulation
function greetUser() {
  const name = document.getElementById("nameInput").value.trim();
  const greetingEl = document.getElementById("greeting");

  if (name === "") {
    greetingEl.textContent = "Please enter your name.";
  } else {
    greetingEl.textContent = `Hello, ${name}! Welcome.`;
  }
}

// Toggle dark theme
document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});
