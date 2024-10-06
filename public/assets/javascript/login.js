// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form submission for demo purposes

//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     if (username === "admin" && password === "admin") {
//         alert("Login successful!");
//         // Redirect or move to the next page here
//         window.location.href = "dashboard.html";
//     } else {
//         alert("Incorrect username or password.");
//     }
// });


document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const emailInput = document.querySelector('.email');
    const passwordInput = document.querySelector('.password');
    const alertBox = document.createElement('div');
    
    // Add an alert box if it's not already there
    form.parentNode.insertBefore(alertBox, form.nextSibling);
  
    form.addEventListener('submit', function (e) {
      // Clear the alert box before every submission
      alertBox.textContent = '';
      alertBox.style.color = 'red';
      alertBox.style.marginTop = '10px';
  
      // Validate Email using a basic regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        alertBox.textContent = 'Please enter a valid email address!';
        e.preventDefault();
        return;
      }
  
      // Validate Password (e.g., ensure it's not empty)
      if (passwordInput.value.trim().length === 0) {
        alertBox.textContent = 'Password is required!';
        e.preventDefault();
        return;
      }
  
      // If all validations pass, form can be submitted
    });
  });
  