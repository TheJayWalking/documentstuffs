// Obfuscated credentials (Base64 encoding)
const validUsername = atob("dGVzdA==");  
const validPassword = atob("dGVzdA==");

// Get elements
const loginForm = document.getElementById("loginForm");
const loginPage = document.getElementById("loginPage");
const linksPage = document.getElementById("linksPage");
const errorMessage = document.getElementById("errorMessage");

// Handle form submission
loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Check credentials
    if (username === validUsername && password === validPassword) {
        loginPage.style.display = "none";  // Hide the login page
        linksPage.style.display = "block"; // Show the links page
    } else {
        errorMessage.style.display = "block"; // Show error message
    }
});
